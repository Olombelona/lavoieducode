import React from 'react';
import { MenuLink } from '../menu_link';

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
  );
}

export function MenuECV() {
  return (
    <div>
      <MenuLink
        link="/stan/ecv/ecv_aix_2021_1"
        name={'Atelier ECV-Digital Aix-en-Provence 2021 partie 1'}
      ></MenuLink>
      <MenuLink
        link="/stan/ecv/ecv_aix_2021_2"
        name={'Atelier ECV-Digital Aix-en-Provence 2021 partie 2'}
      ></MenuLink>
    </div>
  );
}
