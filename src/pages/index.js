import React from 'react'
import { useRouteData } from 'react-static'

import Content from 'components/Content'

export default function Index() {
  const { certificates } = useRouteData()

  return (
    <div className="container">
      <div className="title">Подарочные сертификаты</div>
      <div className="content">
        {certificates.map((certificate) => <Content {...certificate} key={certificate.id} />)}
      </div>
    </div>
  )
}
