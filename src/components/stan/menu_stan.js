import React from 'react'
import { MenuLink } from '../menu_link'

export function MenuStan() {
  return (
    <div>
      <MenuLink
        link="/stan/home"
        name={
          'Stanislas Marçais proposent de découvrir la voie du code créatif, alors venez suivre la caravane'
        }
      ></MenuLink>
    </div>
  )
}

export function MenuECV() {
  return (
    <div>
      <MenuLink
        link="/stan/ecv/ecv_aix_2020_2021"
        name={'Atelier ECV-Digital Aix-en-Provence 2020-2021'}
      ></MenuLink>
    </div>
  )
}
