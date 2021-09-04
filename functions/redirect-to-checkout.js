const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

// instead of returning a session ID to the client side for redirectToCheckout,
// we can redirect serverside with the created sessions url (session.url)

// const url = process.env.GATSBY_URL;

exports.handler = async (event) => {
  const inventory = require('./data/artworks.json');

  let product;
  try {
    product = JSON.parse(event.body);
    console.log(product);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Received malformed JSON.',
        error: error.message,
      }),
    };
  }

  let line_items;
  try {
    line_items = validateCartItems(inventory, product);

    // line_items.map((item, i) => {
    //   console.log(item);
    //     const publicURL = product[item.id]
    //   item.price_data.product_data.images = [
    //     'https://images.unsplash.com/photo-1630371251263-eb7796cd4118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //   ];
    // });
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: 'Some of the items in your cart are invalid.',
        error: error.message,
      }),
    };
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      mode: 'payment',
      success_url: `${process.env.GATSBY_URL}/success`,
      cancel_url: `${process.env.GATSBY_URL}/cancel`,
      line_items,
    });
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'While communicating with Stripe, we encountered an error.',
        error: error.message,
      }),
    };
  }

  return {
    statusCode: 200,

    body: JSON.stringify({ session }),
  };
};
