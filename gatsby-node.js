const fs = require('fs');
// Path is a Node.js library with utilities for working with file paths.
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query MyQuery {
      allArtworksJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  results.data.allArtworksJson.edges.forEach((edge) => {
    const painting = edge.node;
    createPage({
      path: `/art/${painting.id}/`,
      component: require.resolve('./src/templates/artwork.js'),
      context: {
        id: painting.id,
      },
    });
  });
};

exports.onPostBuild = async ({ graphql }) => {
  // Run the GraphQL query (from example above).
  await graphql(`
    query MyQuery {
      allArtworksJson {
        nodes {
          artist
          id
          keywords
          source
          name
          price
          year
          height
          color
          width
          image {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `).then((result) => {
    // A reference to where we are going to put the files. Note that the public
    // directory already exists because the build has been completed (since
    // we're in the onPostBuild hook).
    const postsPath = './functions/data';

    // Collect the data for all earworms. This simply digs into the query result
    // and extracts the objects we care about.
    const posts = result.data.allArtworksJson.nodes;

    const skus = posts.map((item) => {
      return {
        name: item.name,
        image: `${process.env.GATSBY_URL}${item.image.publicURL}`,
        price: item.price,
        product_data: { metadata: { type: 'artwork' } },
        artist: item.artist,
        year: item.year,
        id: item.id,
        currency: 'EUR',
        source: item.source,
        height: item.height,
        width: item.width,
      };
    });

    if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath);

    fs.writeFileSync(`${postsPath}/artworks.json`, JSON.stringify(skus));
  });
};
