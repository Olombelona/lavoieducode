// 'use strict';

export default function sketch(p) {
  console.log('je suis là');
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
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
