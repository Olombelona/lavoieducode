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
    let hue = p.abs(p.sin(p.frameCount * 0.001))
    p.background(hue, 1, 1)
    let size = [p.height / 6, p.height / 6]
    let pos = [0, 0]
    // display_ellipse(pos, size, hue)
    display_rect(pos, size, hue)
  }

  function button(pos, size, rounded, label) {
    let px = pos[0]
    let py = pos[1]
    let sx = size[0]
    let sy = size[1]
    p.rect(px, py, sx, sy, 50)
  }

  function display_rect(pos, size, hue) {
    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2
    let cursor = [x, y]
    p.noStroke()
    if (inside_rect(cursor, pos, size)) {
      p.fill(0, 0, 1)
    } else {
      p.fill(1 - hue, 1, 1)
    }
    button(pos, size, 50, 'truc')
    // p.rect(pos[0], pos[1], size[0], size[1])
  }

  function display_ellipse(pos, size, hue) {
    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2
    let cursor = [x, y]
    p.noStroke()
    if (inside_ellipse(cursor, pos, size)) {
      p.fill(0, 0, 1)
    } else {
      p.fill(1 - hue, 1, 1)
    }
    p.ellipse(pos[0], pos[1], size, size)
  }
}

function inside_ellipse(cursor, pos, size) {
  let x = cursor[0]
  let y = cursor[1]
  let px = pos[0]
  let py = pos[1]
  let sx = size[0]
  let sy = size[1]
  let bool_x = false
  if (x < px + sx / 2 && x > px - sx / 2) {
    bool_x = true
  }
  let bool_y = false
  if (y < py + sy / 2 && y > py - sy / 2) {
    bool_y = true
  }

  if (bool_x && bool_y) return true
  return false
}

function inside_rect(cursor, pos, size) {
  let x = cursor[0]
  let y = cursor[1]
  let px = pos[0]
  let py = pos[1]
  let sx = size[0]
  let sy = size[1]
  let bool_x = false
  if (x < px + sx && x > px) {
    bool_x = true
  }
  let bool_y = false
  if (y < py + sy && y > py - sy) {
    bool_y = true
  }

  if (bool_x && bool_y) return true
  return false
}
