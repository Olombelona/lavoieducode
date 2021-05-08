import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Layout from '../../../components/layout';

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
  );
}

function sketch(p) {
  // createButton() // look if it's cool or not
  let pos;
  let size;
  let rounded;
  let inside;
  let label;
  let hue;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1, 1, 1, 1);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    init_button();
    console.log('pos', pos);
  };

  p.draw = function () {
    let hue = p.abs(p.sin(p.frameCount * 0.001));
    p.background(hue, 1, 1);
    update_button();
    show_button(hue);
  };

  p.mousePressed = function () {
    if (inside) {
      reset_button();
    }
  };

  // your functions
  function init_button() {
    size = p.createVector(p.height / 6, p.height / 6);
    rounded = (p.random() * size.x) / 2;
    pos = p.createVector(p.random() * p.width, p.random() * p.height);
    label = 'le bouton';
  }

  function reset_button() {
    let sx = p.random(p.height / 6, p.height / 3);
    let sy = p.random(p.height / 10, p.height / 6);
    size.set(sx, sy);
    rounded = (p.random() * size.x) / 2;
    let px = p.random() * (p.width - size.x);
    let py = p.random() * (p.height - size.y);
    pos.set(px, py);
  }

  function update_button() {
    let x = p.mouseX;
    let y = p.mouseY;
    let cursor = p.createVector(x, y);
    inside = inside_rect(cursor, pos, size);
  }

  function show_button(hue) {
    p.noStroke();
    if (inside) {
      p.fill(0, 0, 1);
    } else {
      p.fill(1 - hue, 1, 1);
    }
    button(pos, size, rounded);
    if (inside) {
      p.fill(0, 0, 0);
    } else {
      p.fill(hue, 1, 1);
    }
    p.textAlign(p.CENTER);
    let x = pos.x + size.x / 2;
    let y = pos.y + size.y / 2;
    p.text(label, x, y);
  }

  function button(pos, size, rounded) {
    let px = pos.x;
    let py = pos.y;
    let sx = size.x;
    let sy = size.y;
    p.rect(px, py, sx, sy, rounded);
  }
}

function inside_ellipse(cursor, pos, size) {
  let x = cursor.x;
  let y = cursor.y;
  let px = pos.x;
  let py = pos.y;
  let sx = size.x;
  let sy = size.y;
  let bool_x = false;
  if (x < px + sx / 2 && x > px - sx / 2) {
    bool_x = true;
  }
  let bool_y = false;
  if (y < py + sy / 2 && y > py - sy / 2) {
    bool_y = true;
  }

  if (bool_x && bool_y) return true;
  return false;
}

function inside_rect(cursor, pos, size) {
  let x = cursor.x;
  let y = cursor.y;
  let px = pos.x;
  let py = pos.y;
  let sx = size.x;
  let sy = size.y;
  let bool_x = false;
  if (x < px + sx && x > px) {
    bool_x = true;
  }
  let bool_y = false;
  if (y < py + sy && y > py - sy) {
    bool_y = true;
  }

  if (bool_x && bool_y) return true;
  return false;
}
