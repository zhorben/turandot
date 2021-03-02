import React from 'react'
import { Link } from './Router'

export default function Content({ id, imageUrl, title }) {
  return (
    <div className="content-link">
      <Link
        to={`/certificate/${id}/`}
        className="link"
      >
        <img src={imageUrl} alt="" />
      </Link>
      <div className="info">
        {title}
        <button className="btn">Купить сертификат</button>
      </div>
    </div>
  )
}