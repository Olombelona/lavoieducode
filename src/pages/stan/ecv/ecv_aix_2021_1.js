import React from 'react';

import P5Wrapper from '../../../components/WrapperP5';
import Layout from '../../../components/layout';
import { inside_rect } from '../../../utils/stan/p5/p5_utils.js';

export default function () {
  return (
    <div>
      <div style={{ position: 'absolute' }}>
        <P5Wrapper sketch={sketch} />
      </div>
      <div style={{ position: 'absolute' }}>
        {/* <Layout title="ECV Aix-en-Provence 2020-2021" to="/stan/home"></Layout> */}
        <Layout title="ECV Aix-en-Provence 2021 partie 1" to="/back"></Layout>
      </div>
    </div>
  );
}

function sketch(p) {
  // createButton() // look if it's cool or not
  let pos;
  let pos_ref;
  let size;
  let size_ref;
  let rounded;
  let inside;
  let label;
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1, 1, 1, 1);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    init_button();
    // console.log('pos', pos);
  };

  p.draw = function () {
    let hue = p.abs(p.sin(p.frameCount * 0.001));
    p.background(hue, 1, 1);
    update_button();
    mutation_button();
    show_button(hue);
  };

  p.mouseReleased = function () {
    if (inside) {
      reset_button();
    }
  };

  // your functions
  function init_button() {
    size = p.createVector(p.height / 6, p.height / 6);
    size_ref = size.copy();
    rounded = (p.random() * size.x) / 2;
    pos = p.createVector(p.random() * p.width, p.random() * p.height);
    pos_ref = pos.copy();
    label = 'le bouton';
  }

  function mutation_button() {
    if (inside) {
      let ratio_x = p.abs(p.sin(p.frameCount * 0.01));
      let ratio_y = p.abs(p.sin(p.frameCount * 0.005));
      let val_x = (p.width / 3) * ratio_x;
      let val_y = (p.height / 3) * ratio_y;

      size.x = size_ref.x + val_x;
      size.y = size_ref.y + val_y;
      pos.x = pos_ref.x - val_x / 2;
      pos.y = pos_ref.y - val_y / 2;
      // console.log('frameCount', p.frameCount);
      // console.log(size.y, '=', size_ref.x, '+', val_x, '*', ratio_x);
    }
  }

  function reset_button() {
    let sx = p.random(p.height / 6, p.height / 3);
    let sy = p.random(p.height / 10, p.height / 6);
    size.set(sx, sy);
    size_ref = size.copy();
    rounded = (p.random() * size.x) / 2;
    let px = p.random() * (p.width - size.x);
    let py = p.random() * (p.height - size.y);
    pos.set(px, py);
    pos_ref = pos.copy();
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
    p.textAlign(p.CENTER, p.CENTER);
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
