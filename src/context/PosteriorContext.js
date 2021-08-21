import React, { createContext, useReducer } from 'react';
import { posteriorReducer } from '../reducers/posteriorReducer';

export const PosteriorContext = createContext();

const PosteriorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(posteriorReducer, {
    cart: [],
    filter: {
      range: {
        min: 0,
        max: 9,
      },
      size: {
        min: 0,
        max: 4,
      },
      source: [],
      artist: [],
      color: [],
      year: [],
      orientation: [],
      sort: 'artist',
    },
  });

  return (
    <PosteriorContext.Provider value={{ state, dispatch }}>
      {children}
    </PosteriorContext.Provider>
  );
};

export default PosteriorContextProvider;
