import React from 'react'
import SketchP5A from './p5/p5a'
import Layout from '../../components/layout'
// import * as mystyle from '../../styles/stan/p5.css'
import ContainerP5 from '../../components/stan/container_p5'

export default function Home() {
  return (
    <div>
      {/* <ContainerP5>
        <SketchP5A />
      </ContainerP5>
      <ContainerP5>
        <Layout title="La caravane du code"></Layout>
      </ContainerP5> */}

      <div style={{ position: 'absolute' }}>
        <SketchP5A />
      </div>
      <div style={{ position: 'absolute' }}>
        <Layout title="La caravane du code"></Layout>
      </div>
    </div>
  )
}
