import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

/**
 * Wrapper from Wendy Dherin
 * @see https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx
 */
const P5Wrapper = props => {
  const sketch_ref = useRef();
  useEffect(() => {
    new p5(props.sketch, sketch_ref.current);
  }, []);
  return <div ref={sketch_ref} />;
};

P5Wrapper.propTypes = {
  sketch: PropTypes.func.isRequired,
};

export default P5Wrapper;
