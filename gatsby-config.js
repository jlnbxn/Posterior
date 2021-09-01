require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Posterior',

    titleTemplate: '%s | Posterior',
    siteUrl: 'https://posterior.netlify.app',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': `Roboto`,
            'slider-rail-background-color-hover': '#222',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-use-shopping-cart`,
      options: {
        mode: 'payment',
        cartMode: 'checkout-session',
        stripePublicKey: process.env.GATSBY_STRIPE_PUBLISHABLE_KEY,
        successUrl: `${process.env.GATSBY_URL}/success`,
        cancelUrl: `${process.env.GATSBY_URL}/cancel`,
        currency: 'EUR',
        allowedCountries: ['AT', 'GB', 'DE'],
        billingAddressCollection: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images\/svg/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    'gatsby-plugin-breadcrumb',
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Price'],
        secretKey:
          'sk_test_51JKgT9ASZ4DgRI1rm0uV257Pzt9gD9hfHDrNpqZCe3T5hfnxNCvLdYlTMvArntlAxEHQNITQQWtmPz3TsjhpIDCh00UxvIcBoR',
        downloadFiles: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/images/products/`,
      },
      __key: 'products',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
