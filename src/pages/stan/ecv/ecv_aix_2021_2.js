import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Layout from '../../../components/layout';
import '../../../styles/stan/ecv/ecv_20_21.css';

function Button(props) {
  return (
    <div className="button">
      <div className="sketch">
        <P5Wrapper sketch={sketch} />
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
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
          <Button label="CSS de Merde" />
          <Button label="CSS la daube" />
        </div>
      </div>
    </div>
  );
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(150, 100);
    p.stroke(255);
    p.fill(0);
    p.rect(0, 0, p.width, p.height, p.height / 2);
  };

  p.draw = function () {};

  p.mouseReleased = function () {};

  p.mousePressed = function () {};
}
