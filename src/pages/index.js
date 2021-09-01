import * as React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { getImage } from 'gatsby-plugin-image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useInView } from 'react-intersection-observer';

import useFilter from '../hooks/useFilter';
import Card from '../components/Elements/Card/Card';
import Wrapper from '../components/Elements/Wrapper';
import LayoutSwitcher from '../components/Elements/LayoutSwitcher/LayoutSwitcher';
import Filter from '../components/Elements/Filter/Filter';
import Breadcrumbs from '../components/Elements/Breadcrumbs';
import { PosteriorContext } from '../context/PosteriorContext';
import { Helmet } from 'react-helmet';
import Head from '../components/Layout/Head';

const IndexPage = ({ data }) => {
  const [size, setSize] = React.useState(10);
  const paintings = useFilter();
  const [layout, setLayout] = React.useState('fluid');

  const { dispatch } = React.useContext(PosteriorContext);

  React.useEffect(() => {
    let uniqueSources = [
        ...new Set(data.allArtworksJson.nodes.map((node) => node.source)),
      ],
      uniqueArtists = [
        ...new Set(data.allArtworksJson.nodes.map((node) => node.artist)),
      ],
      uniqueYears = [
        ...new Set(data.allArtworksJson.nodes.map((node) => node.year)),
      ],
      uniqueColors = [
        ...new Set(data.allArtworksJson.nodes.map((node) => node.color)),
      ];
    dispatch({ type: 'SET_ARTWORKS', artworks: data.allArtworksJson.nodes });
    dispatch({ type: 'SET_SOURCES', sources: uniqueSources });
    dispatch({ type: 'SET_ARTISTS', artists: uniqueArtists });
    dispatch({ type: 'SET_YEARS', years: uniqueYears });
    dispatch({ type: 'SET_COLORS', colors: uniqueColors });
  }, []);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    setSize(() => size + 10);
  }, [inView]);
  return (
    <>
      <Head title="Demo Poster Shop" />
      <section
        css={css`
          background-color: #f4f2f1;
        `}
      >
        <Wrapper wide>
          <Breadcrumbs />
          <Filter />
        </Wrapper>
      </section>

      <section
        css={css`
          min-height: 300px;
          margin: 0;
          padding: 20px 0;
        `}
      >
        <Wrapper wide>
          <LayoutSwitcher layout={layout} setLayout={setLayout} />
          <ResponsiveMasonry
            style={{ margin: ' 0 -15px' }}
            columnsCountBreakPoints={{ 350: 1, 600: 2, 768: 3, 1280: 4 }}
          >
            <Masonry>
              {paintings &&
                paintings.slice(0, size).map((artwork) => {
                  return (
                    <Card
                      title={artwork.name}
                      artist={artwork.artist}
                      image={getImage(artwork.image)}
                      price={artwork.price}
                      height={artwork.height}
                      width={artwork.width}
                      id={artwork.id}
                      key={artwork.id}
                      layout={layout}
                    />
                  );
                })}
              <div ref={ref}></div>
            </Masonry>
          </ResponsiveMasonry>
        </Wrapper>
      </section>
    </>
  );
};

export default IndexPage;

export const query = graphql`
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
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
