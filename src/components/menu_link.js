import React from 'react'
import { Link } from 'gatsby'

export function MenuLink(props) {
  return (
    <div>
      <Link to={props.link} state={{ info: props.str }}>
        {props.name}
      </Link>
    </div>
  )
}
