// REACT
import React from 'react';
import { useState, useContext } from 'react';
// GATSBY
import { navigate } from 'gatsby';
// APP
import '../../../styles/stan/ecv/ecv_20_21.css';
import { inside_rect } from '../../../utils/stan/p5/p5_utils.js';
// PROCESSING
import {
  P5DispatchContext,
  P5StateContext,
} from '../../../components/P5Manager';
import P5Wrapper from '../../../components/P5Wrapper';
import P5Manager from '../../../components/P5Manager';
//Wrapper Processing / P5JS
const Background_ECV = P5Wrapper('background ecv');
const Bouton_A = P5Wrapper('bouton a');
const Bouton_B = P5Wrapper('bouton b');
const Bouton_C = P5Wrapper('bouton c');

export default function () {
  return (
    <div>
      <P5Manager>
        <div style={{ position: 'absolute' }}>
          <Background comp={Background_ECV} />
        </div>
        <div style={{ position: 'absolute' }}>
          <CompButton comp={Bouton_A} label="RETOUR" what="/back" />
          <CompButton comp={Bouton_B} label="ACCUEIL" what="/" />
          <CompButton comp={Bouton_C} label="CHANGEMENT" what="refresh" />
        </div>
      </P5Manager>
    </div>
  );
}

/**
 *
 *
 * SKETCH BUTTON
 *
 *
 */
function CompButton(props) {
  // context data
  const dispatch = useContext(P5DispatchContext);
  const { x } = useContext(P5StateContext);
  const [refresh, set_refresh] = useState(0);
  //sketch data
  let buf_data = {
    title: props.label,
  };

  const que_faire = event => {
    event.preventDefault();

    if (props.what === '/back') {
      navigate(-1);
    }
    if (props.what === '/') {
      navigate('/');
    }

    if (props.what === 'refresh') {
      const buf_refresh = refresh + 1;
      set_refresh(buf_refresh);
      dispatch({ type: 'SET_X', payload: buf_refresh });
    }
  };

  return (
    <div onClick={que_faire}>
      <props.comp sketch={my_sketch_button} data={buf_data}></props.comp>
    </div>
  );
}

function my_sketch_button(p5) {
  let pos = p5.createVector(0, 0);
  let size = p5.createVector(0, 0);
  let rounded = 0;
  let inside_is = false;

  p5.setup = function () {
    p5.createCanvas(150, 100);

    size.set(p5.width / 2, p5.height / 2);
    pos.set(size.x / 2, size.y / 2);
    rounded = p5.height / 2;
  };

  p5.draw = function () {
    let cursor = p5.createVector(p5.mouseX, p5.mouseY);

    inside_is = inside_rect(cursor, pos, size);
    p5.clear();
    if (inside_is) {
      animation_in(pos, size, rounded);
    } else {
      animation_out(pos, size, rounded);
    }
    show_label();
  };

  function animation_in(s) {
    let ratio = p5.abs(p5.sin(p5.frameCount * 0.05));

    let diam = p5.map(ratio, 0, 1, p5.height / 5, p5.height / 2);
    let x = p5.width / 2;
    let y = p5.height / 2;
    p5.noStroke();
    p5.fill(255, 255, 0);
    p5.ellipse(x, y, diam, diam);
  }

  function animation_out(p, s, r) {
    p5.noStroke();
    p5.fill(255, 0, 0);
    p5.rect(p.x, p.y, s.x, s.y, r);
  }

  function show_label() {
    p5.noStroke();
    p5.fill(0);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(p5.data.title, p5.width / 2, p5.height / 2);
  }
}

/**
 *
 *
 * SKETCH BACKGROUND
 *
 *
 */
let buf = {
  value: 0,
};
function Background(props) {
  const { x, y } = useContext(P5StateContext);
  const [state_data, set_data] = useState(buf);
  if (x !== state_data.value) {
    buf.value = x;
    set_data(buf);
  }

  return (
    <props.comp sketch={my_sketch_background} data={state_data}></props.comp>
  );
}

function my_sketch_background(p5) {
  let ref = -1;
  let bg_color;
  let shape_color;
  let size = p5.createVector(0, 0);
  let pos = p5.createVector(0, 0);
  let angle = 0;
  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
    bg_color = p5.color(p5.random(255), p5.random(255), p5.random(255));
    set_shape();
  };

  p5.draw = function () {
    p5.noStroke();
    let new_ref = p5.data.value;
    if (ref !== new_ref) {
      bg_color = p5.color(p5.random(255), p5.random(255), p5.random(255));
      set_shape();
      ref = new_ref;
    }

    p5.background(bg_color);
    p5.fill(shape_color);
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.push();
    p5.rotate(angle);
    // p5.rotate(p5.map(p5.mouseX, 0, p5.width, 0, p5.TAU));
    p5.translate(-size.x / 2, -size.y / 2);

    p5.rect(0, 0, size.x, size.y);
    p5.pop();
  };

  // MES FUNCTION
  function set_shape() {
    shape_color = p5.color(p5.random(255), p5.random(255), p5.random(255));
    size.set(
      p5.random(p5.width / 20, p5.width * 2),
      p5.random(p5.height / 20, p5.height * 2)
    );
    pos.set(p5.width / 2 - size.x / 2, p5.height / 2 - size.y / 2);
    angle = p5.random(p5.TAU);
  }
}
