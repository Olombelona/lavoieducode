/**
 * Gatsby-React P5 Wrapper
 * v 0.0.2
 * 2021-2021
 *
 * Inspired
 * https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx
 * https://github.com/atorov/react-hooks-p5js
 * https://www.robinwieruch.de/react-derive-state-props
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 * https://www.xspdf.com/resolution/53771877.html
 * https://www.tutorialspoint.com/using-usecontext-in-react-js
 */
import React from 'react';
import { useRef, useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { memo } from 'react';
// import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
import p5 from 'p5';
import P5Manager from './P5Manager';

import P5DispatchContext from './P5Wrapper';
import P5StateContext from './P5Manager';

// function generate() {
//   return -1;
// }
// import { generate } from 'shortid';
// export default function (id = generate()) {
// export default function (id) {
export default function (id = 'abc...xyz') {
  let env = null;

  function P5Wrapper({ sketch = () => {}, data = {}, dispatch = () => {} }) {
    const sketchContainer = useRef(null);

    useEffect(() => {
      env = new p5(sketch, sketchContainer.current);
      env.data = data;
      env.dispatch = dispatch;
      return () => {
        env.remove();
      };
    }, [dispatch, sketch, data]);

    return <div ref={sketchContainer}></div>;
  }

  P5Wrapper.propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    sketch: PropTypes.func,
  };

  P5Wrapper.defaultProps = {
    data: {},
    dispatch: () => {},
    sketch: () => {},
  };

  return memo(P5Wrapper, nextProps => {
    // return memo(P5Wrapper, (_, nextProps) => {
    if (env) {
      env.data = { ...nextProps.data };
      return true;
    }
    return false;
  });
}
