const fs = require('fs');
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
    const postsPath = './functions/data';
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
