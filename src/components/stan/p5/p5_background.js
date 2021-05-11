import React from 'react';

import P5Wrapper from '../../p5wrapper';

export function Background() {
  return <P5Wrapper sketch={sketch} />;
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.Height, p.WEBGL);
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
