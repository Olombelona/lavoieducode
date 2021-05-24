/**
 * Gatsby-React P5 Manager
 * v 0.0.2
 * 2021-2021
 *
 *  Inspired from
 * https://github.com/atorov/react-hooks-p5js
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 * https://www.xspdf.com/resolution/53771877.html
 * https://www.tutorialspoint.com/using-usecontext-in-react-js
 * https://blog.logrocket.com/guide-to-react-usereducer-hook/
 *
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

const init_state = {
  x: 0,
  y: 0,
  z: 0,
  data: {},
  sketch: null,
};

export const P5DispatchContext = createContext(() => {});
export const P5StateContext = createContext(init_state);

export default function P5Manager({ children }) {
  const [state, dispatch] = useReducer(reducer, init_state);
  return (
    <P5DispatchContext.Provider value={dispatch}>
      <P5StateContext.Provider value={state}>
        {children}
      </P5StateContext.Provider>
    </P5DispatchContext.Provider>
  );
}

P5Manager.propTypes = {
  children: PropTypes.any.isRequired,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USE_SKETCH': {
      return { ...state, sketch: action.payload };
    }

    case 'SET_DATA': {
      return { ...state, data: action.payload };
    }

    case 'SET_X': {
      return { ...state, x: action.payload };
    }

    case 'SET_Y': {
      return { ...state, y: action.payload };
    }

    case 'SET_Z': {
      return { ...state, z: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
