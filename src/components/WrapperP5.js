/**
 * Inspired from Wendy Dherin
 * @see https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx
 *
 * v 0.0.2
 * 2021-2021
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

const P5Wrapper = props => {
  let canvas = null;
  function data() {}
  const sketch_ref = useRef();

  useEffect(() => {
    canvas = new p5(props.sketch, sketch_ref.current);
    if (data) {
      canvas.data(props);
    }
  }, []);
  return <div ref={sketch_ref} />;
};

P5Wrapper.propTypes = {
  sketch: PropTypes.func.isRequired,
};

export default P5Wrapper;
