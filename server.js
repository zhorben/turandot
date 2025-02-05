const path = require('path')
const { createHash } = require('crypto')

const socialLinks = require('./data/socialLinks')
const menuLinks = require('./data/menuLinks')
const certificates = require('./data/certificates.json')

const data = {
  socialLinks,
  menuLinks
}

const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-formbody'))

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
})

fastify.register(require('point-of-view'), {
  engine: {
    pug: require('pug')
  }
})

fastify.get('/certificate/:id', async ({ params }, reply) => {
  const certificate = certificates.find(({ id }) => Number(params.id) === id)

  if (certificate) {
    return reply.view('/templates/certificate.pug', { ...data, certificate })
  }

  return reply.view('/templates/404.pug', data)
})

fastify.get('/success/:id', async ({ params }, reply) => {
  const certificate = certificates.find(({ id }) => Number(params.id) === id)

  if (certificate) {
    return reply.view('/templates/success.pug', { ...data, certificate })
  }

  return reply.view('/templates/success.pug', data)
})

fastify.get('/gratitude', async (req, reply) => reply.view('/templates/gratitude.pug', data))

fastify.post('/payments', async (req, reply) => {
  console.log(req.body, '--- body')
  const { id, sum, clientid } = req.body
  console.log(req.body.key, '--- key')
  console.log(createHash('md5').update(id + sum + clientid + '-uoZuNuzhzomm7ah').digest("hex"))
})

fastify.get('/', async (req, reply) => reply.view('/templates/home.pug', { ...data, certificates }))

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()