import React from 'react'
import { Background } from './p5/p5_utils'
import Layout from '../../components/layout'
import { MenuECV } from '../../components/stan/menu_stan'
import { ContainerTest } from '../../components/stan/container'

/**
 *  Work on eventListener to catch event to pass at Processing sketch
 *  https://www.pluralsight.com/guides/event-listeners-in-react-components
 */

// https://cuberto.com/services/

export default function Home() {
  return (
    <div>
      <ContainerTest>
        <Background />
      </ContainerTest>
      <ContainerTest>
        <Layout title="La caravane du code créatif"></Layout>
        <MenuECV />
      </ContainerTest>
    </div>

    /* <div style={{ position: 'absolute' }}>
        <SketchP5A />
      </div>
      <div style={{ position: 'absolute' }}>
        <Layout title="La caravane du code"></Layout>
      </div>
    </div> */
  )
}
