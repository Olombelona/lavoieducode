import React from 'react'
import SketchP5A from './p5/p5a'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <div>
      <Layout title="La caravane du code"></Layout>
      <SketchP5A />
    </div>
  )
}
