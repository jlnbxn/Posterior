import React from 'react';
import Layout from './src/components/Layout/Layout';
import PosteriorContextProvider from './src/context/PosteriorContext';

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <PosteriorContextProvider>
        <Layout {...props}>{element}</Layout>
      </PosteriorContextProvider>
    </>
  );
};
