import React from 'react'
import { Menu_Dinh } from '../components/dinh/menu_dinh'
import { Menu_Stan } from '../components/stan/menu_stan'
export function Menu() {
  return (
    <div>
      <Menu_Dinh />
      <Menu_Stan />
    </div>
  )
}
