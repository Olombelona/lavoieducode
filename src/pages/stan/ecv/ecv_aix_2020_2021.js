import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import Layout from '../../../components/layout'

export default function () {
  return (
    <div>
      <div style={{ position: 'absolute' }}>
        <P5Wrapper sketch={sketch} />
      </div>
      <div style={{ position: 'absolute' }}>
        {/* <Layout title="ECV Aix-en-Provence 2020-2021" to="/stan/home"></Layout> */}
        <Layout title="ECV Aix-en-Provence 2020-2021" to="/back"></Layout>
      </div>
    </div>
  )
}

function sketch(p) {
  let rotation = 0

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    p.colorMode(p.HSB, 1, 1, 1, 1)

    p.windowResized = () => {
      // p.resizeCanvas(p.windowWidth, p.windowHeight)
      p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
  }

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation !== null) {
  //     rotation = (props.rotation * Math.PI) / 180
  //   }
  // }

  p.draw = function () {
    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2
    let hue = p.abs(p.sin(p.frameCount * 0.001))
    p.background(hue, 1, 1)
  }
}
