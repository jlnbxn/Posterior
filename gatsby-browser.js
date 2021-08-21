import React from 'react';
import Layout from './src/components/Layout/Layout';
import PosteriorContextProvider from './src/context/PosteriorContext';
import { CartProvider } from 'use-shopping-cart';

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <PosteriorContextProvider>
        <CartProvider
          mode="payment"
          cartMode="checkout-session"
          stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
          successUrl={`${process.env.GATSBY_URL}/success`}
          cancelUrl={`${process.env.GATSBY_URL}/cancel`}
          currency="EUR"
          allowedCountries={['AT', 'GB', 'DE']}
          billingAddressCollection={true}
        >
          <Layout {...props}>{element}</Layout>
        </CartProvider>
      </PosteriorContextProvider>
    </>
  );
};
