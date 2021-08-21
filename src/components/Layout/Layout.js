import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import GlobalStyles from '../GlobalStyles';
import MenuMobile from '../Menu/MenuMobile';
import MainMenu from '../Menu/MenuDesktop';
import 'antd/dist/antd.css';
import PosteriorContextProvider from '../../context/PosteriorContext';
import Footer from '../Elements/Footer/Footer';
import { useMediaQuery } from 'react-responsive';

function Layout({ children }) {
  let stripePromise;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1023px)',
  });

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        'pk_test_51JKgT9ASZ4DgRI1rSvNGPW1ArAjCVMaPHoxxgxAERsmfsmfrwM7D42cSsg1m1xgWnDVQfKu96XWzE95Kvh31Bay600aXBTVycZ'
      );
    }
    return stripePromise;
  };

  return (
    <>
      <PosteriorContextProvider>
        <GlobalStyles />
        {isDesktopOrLaptop ? <MainMenu /> : <MenuMobile />}
        <main>{children}</main>
        <Footer />
      </PosteriorContextProvider>
    </>
  );
}

export default Layout;
