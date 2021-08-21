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
