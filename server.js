const path = require('path')
const { md5 } = require('hash-wasm')

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

fastify.get('/success', async (req, reply) => reply.view('/templates/success.pug', data))

fastify.get('/gratitude', async (req, reply) => reply.view('/templates/gratitude.pug', data))

fastify.post('/payments', (req, reply) => {
  console.log(req.body.key, '--- key')
  md5('MD5: ', '-uoZuNuzhzomm7ah')
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