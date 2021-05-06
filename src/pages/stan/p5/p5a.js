import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

export default function SketchP5A() {
  return <P5Wrapper sketch={sketch} />
}

function sketch(p) {
  let rotation = 0

  p.setup = function () {
    p.createCanvas(p.windowWidth, 400, p.WEBGL)
    p.colorMode(p.HSB, 1, 1, 1, 1)

    p.windowResized = () => {
      // p.resizeCanvas(p.windowWidth, p.windowHeight)
      p.resizeCanvas(p.windowWidth, 400)
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation !== null) {
      rotation = (props.rotation * Math.PI) / 180
    }
  }

  p.draw = function () {
    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2
    p.noCursor()
    let hue = p.abs(p.sin(p.frameCount * 0.001))
    p.background(hue, 1, 1)
    p.ellipse(x, y, 50, 50)
  }
}
