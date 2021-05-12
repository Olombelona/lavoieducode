import React from 'react';

import P5Wrapper from '../../../components/WrapperP5';
import Layout from '../../../components/layout';
import '../../../styles/stan/ecv/ecv_20_21.css';
import { inside_rect } from '../../../utils/stan/p5/p5_utils.js';

function Button(props) {
  return (
    <div className="button">
      <div className="sketch">
        <P5Wrapper sketch={sketch} data={props.label} />
      </div>
    </div>
  );
}

function sketch(p) {
  let data;
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
    p.text(data, p.width / 2, p.height / 2);
  };

  p.data = function (props) {
    if (props.data) {
      data = props.data;
    }
  };
}

export default function () {
  return (
    <div>
      <div>
        {/* <Layout title="ECV Aix-en-Provence 2020-2021" to="/stan/home"></Layout> */}
        <Layout title="ECV Aix-en-Provence 2021 partie 2" to="/back"></Layout>
      </div>
      <div>
        <div className="menu">
          <Button label="ROUGE" />
          <Button label="VERT" />
          <Button label="BLEU" />
        </div>
      </div>
    </div>
  );
}
