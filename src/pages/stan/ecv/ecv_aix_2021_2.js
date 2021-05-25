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

// BUTTON
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

function my_sketch_button(p) {
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

// SKETCH BACKGROUND
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

function my_sketch_background(p) {
  let ref = -1;
  let bg_color;
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    bg_color = p.color(p.random(255), p.random(255), p.random(255));
  };

  p.draw = function () {
    let new_ref = p.data.value;
    if (ref !== new_ref) {
      console.log('p.data', ref, p.data);
      bg_color = p.color(p.random(255), p.random(255), p.random(255));
      ref = new_ref;
    }
    p.background(bg_color);
  };
}
