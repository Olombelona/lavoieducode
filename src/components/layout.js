import React from 'react';
import { Link, navigate } from 'gatsby';

import Header from '../components/header';
import '../styles/layout.css';

function Home(props, { children }) {
  return (
    <div>
      <Link to="/">home</Link>
      <Header str={props.data.title} />

      {/* <footer></footer> */}
      <main>{children}</main>
    </div>
  );
}

function Back(props, { children }) {
  return (
    <div>
      <div onClick={() => navigate(-1)}>Go Back</div>
      {/* <Button onClick={() => navigate(-1)}>Go Back</Button> */}
      {/* <Link to="/">go back</Link> */}
      <Header str={props.data.title} />

      {/* <footer></footer> */}
      <main>{children}</main>
    </div>
  );
}

function Goto(props, { children }) {
  let arr = props.to.split('/');
  let len = arr.length;
  return (
    <div>
      <Link to={props.to}>{arr[len - 1]}</Link>
      <Header str={props.title} />

      {/* <footer></footer> */}
      <main>{children}</main>
    </div>
  );
}

const Layout = (props, { children }) => {
  if (props.link === 'false') {
    return (
      <div>
        <Header str={props.title} />
        <main>{children}</main>
      </div>
    );
  } else {
    if (props.to === '/back' || props.to === '/previous') {
      return <Back data={props}>{children}</Back>;
    } else if (typeof props.to !== 'undefined') {
      return <Goto data={props}>{children}</Goto>;
    } else {
      return <Home data={props}>{children}</Home>;
    }
  }
};

export default Layout;
