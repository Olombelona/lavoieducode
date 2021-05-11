import React from 'react';
import { Background } from '../../components/stan/p5/p5_background';
import Layout from '../../components/layout';
import { MenuECV } from '../../components/stan/menu_stan';
import { ContainerTest } from '../../components/stan/container';

/**
 *  Work on eventListener to catch event to pass at Processing sketch
 *  https://www.pluralsight.com/guides/event-listeners-in-react-components
 */

// https://cuberto.com/services/

import P5Wrapper from '../../components/WrapperP5';

// export function Background() {
//   return <P5Wrapper sketch={sketch}></P5Wrapper>;
// }

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

export default function Home() {
  return (
    <div>
      <ContainerTest>
        <P5Wrapper sketch={sketch}></P5Wrapper>;{/* <Background /> */}
      </ContainerTest>
      <ContainerTest>
        <Layout title="La caravane du code créatif"></Layout>
        <MenuECV />
      </ContainerTest>
    </div>

    /* <div style={{ position: 'absolute' }}>
        <SketchP5A />
      </div>
      <div style={{ position: 'absolute' }}>
        <Layout title="La caravane du code"></Layout>
      </div>
    </div> */
  );
}
