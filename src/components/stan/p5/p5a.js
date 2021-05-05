import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

export default function SketchP5A() {
  return <P5Wrapper sketch={sketch} />
}

function sketch(p) {
  let rotation = 0

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation !== null) {
      rotation = (props.rotation * Math.PI) / 180
    }
  }

  p.draw = function () {
    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2
    // console.log('mouse', p.mouseX, p.mouseY)
    // console.log('size', p.width, p.height)
    // console.log('window', p.windowWidth, p.windowHeight)
    p.background(p.frameCount % 255)
    p.ellipse(x, y, 50, 50)

    // p.background(100)
    // p.normalMaterial()
    // p.noStroke()
    // p.push()
    // p.rotateY(rotation)
    // p.box(100)
    // p.pop()
  }
}
