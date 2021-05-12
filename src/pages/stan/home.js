import React from 'react';

// site
import Layout from '../../components/layout';
import { MenuECV } from '../../components/stan/menu_stan';
import { ContainerTest } from '../../components/stan/container';
// Processing
import sketch from '../../sketches/background';
import P5Wrapper from '../../components/WrapperP5';

function Background() {
  return <P5Wrapper sketch={sketch}></P5Wrapper>;
}

export default function Home() {
  return (
    <div>
      <ContainerTest>
        <Background />
      </ContainerTest>
      <ContainerTest>
        <Layout title="La caravane du code créatif"></Layout>
        <MenuECV />
      </ContainerTest>
    </div>
  );
}
