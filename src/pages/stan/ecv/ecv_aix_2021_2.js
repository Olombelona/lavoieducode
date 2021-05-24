import React from 'react';
import { useState } from 'react';

import Layout from '../../../components/layout';
import '../../../styles/stan/ecv/ecv_20_21.css';
import { inside_rect } from '../../../utils/stan/p5/p5_utils.js';

// Processing part
import P5Wrapper from '../../../components/P5Wrapper';
import P5Manager from '../../../components/P5Manager';
const Background_ECV = P5Wrapper('background ecv');

const Bouton_A = P5Wrapper('bouton a');
const Bouton_B = P5Wrapper('bouton b');
const Bouton_C = P5Wrapper('bouton c');

// export default function ECV_2021_2() {
export default function () {
  return (
    <div>
      <div style={{ position: 'absolute' }}>
        <Background />
      </div>

      <div style={{ position: 'absolute' }}>
        <Layout title="ECV Aix-en-Provence 2020-2021" to="/back"></Layout>
      </div>
      <div style={{ position: 'absolute' }}>
        <P5Manager>
          <CompButton comp={Bouton_A} label="ROUGE" />
          <CompButton comp={Bouton_B} label="VERT" />
          <CompButton comp={Bouton_C} label="ORANGE" />
        </P5Manager>
      </div>
    </div>
  );
}

function Background() {
  return <Background_ECV sketch={background_p5}></Background_ECV>;
}

function CompButton(props) {
  let buf_data = {
    title: props.label,
  };
  return (
    <div>
      <props.comp sketch={button_p5}></props.comp>
    </div>
  );
}

function button_p5(p) {
  let pos = p.createVector(0, 0);
  let size = p.createVector(0, 0);
  let rounded = 0;
  let inside_is = false;
  p.setup = function () {
    p.createCanvas(150, 100);

    size.set(p.width / 2, p.height / 2);
    pos.set(size.x / 2, size.y / 2);
    rounded = p.height / 3;
  };

  p.draw = function () {
    let cursor = p.createVector(p.mouseX, p.mouseY);
    p.noStroke();
    inside_is = inside_rect(cursor, pos, size);
    // console.log('inside is', inside_is);
    if (inside_is) {
      p.fill(255, 0, 0);
    } else {
      p.fill(255, 255, 0);
    }
    p.rect(pos.x, pos.y, size.x, size.y, rounded);
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(p.data.title, p.width / 2, p.height / 2);
  };
}

function background_p5(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  p.draw = function () {
    p.background(255, 0, 0);
  };
}
