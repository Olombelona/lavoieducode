import React from 'react'
import { MenuLink } from '../menu_link'

export function MenuDinh() {
  return (
    <div>
      <MenuLink
        link="/dinh/home"
        name={
          "Dinh Doan Van Bien propose de très bon moufgazis à la Guinness aujourd'hui. Profitez-en !"
        }
      ></MenuLink>
    </div>
  )
}
