import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
/**
 *
 * @see https://github.com/and-who/react-p5-wrapper
 */

export function Background() {
  return <P5Wrapper sketch={sketch} />;
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1, 1, 1, 1);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  p.draw = function () {
    let hue = p.abs(p.sin(p.frameCount * 0.001));
    p.background(hue, 1, 1);
  };
}

export const inside_ellipse = function (cursor, pos, size) {
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
};

export const inside_rect = function (cursor, pos, size) {
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
};
