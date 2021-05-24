import React from 'react';

// site
import Layout from '../../components/layout';
import { MenuECV, MenuCulture } from '../../components/stan/menu_stan';
import { ContainerTest } from '../../components/stan/container';
// Processing
import sketch from '../../sketches/background';
import P5Wrapper from '../../components/P5Wrapper';

const Background_Home = P5Wrapper('background home');

function Background() {
  return <Background_Home sketch={sketch}></Background_Home>;
}

export default function Home() {
  return (
    <div>
      <ContainerTest>
        <Background />
      </ContainerTest>
      <ContainerTest>
        <Layout title="La caravane du code créatif"></Layout>
        <MenuCulture />
        <MenuECV />
      </ContainerTest>
    </div>
  );
}
