import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Certificate() {
  const { certificate } = useRouteData()

  return (
    <div>
      <Link to="/">{'<'} Back</Link>
      <br />
      <h3>{certificate.title}</h3>
    </div>
  )
}
