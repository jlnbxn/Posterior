import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import { PosteriorContext } from '../context/PosteriorContext';
import Wrapper from '../components/Elements/Wrapper';
import { useShoppingCart } from 'use-shopping-cart';
import Breadcrumbs from '../components/Elements/Breadcrumbs';
import Section from '../components/Elements/Section';
import Head from '../components/Layout/Head';

export const query = graphql`
  query ($id: String!) {
    artworksJson(id: { eq: $id }) {
      artist
      id
      keywords
      source
      name
      year
      price
      height
      width
      image {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
const Heading = styled.h2`
  margin-bottom: 10px;
  line-height: 115%;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Author = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-transform: none;
  h3 {
    display: inline;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5px;
    text-decoration: underline;
  }
`;

const Dimensions = styled.div`
  color: #7c7876;
  margin: 15px 0;
  span {
    color: inherit;
  }
`;

const Prices = styled.div`
  margin: 15px 0;
  span {
    display: block;
    white-space: nowrap;
    font-size: 24px;
    font-weight: 400;
  }
`;

const ArtAction = styled.div`
  padding: 30px 0;
`;

const Artwork = ({ data, location }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(PosteriorContext);
  const { addItem } = useShoppingCart();
  const artwork = data.artworksJson;

  console.log(artwork);

  return (
    <>
      <Head title={artwork.name} />
      <Section>
        <Wrapper wide>
          <Breadcrumbs artist={artwork.artist} name={artwork.name} />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          {/* <UrgentMessage /> */}

          <Row justify="space-between" align="center">
            <Col
              span={24}
              md={13}
              lg={14}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <GatsbyImage image={getImage(artwork.image)} alt="" />
            </Col>
            <Col
              span={24}
              md={10}
              lg={8}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArtAction>
                <Heading>{artwork.name}</Heading>
                <Author>
                  <span>By </span>
                  <h3>{artwork.artist}</h3>
                </Author>
                <Dimensions>
                  <span>
                    {`Paintings - ${Math.floor(
                      artwork.width / 10
                    )}x${Math.floor(artwork.height / 10)}cm`}
                  </span>
                </Dimensions>
                <Prices>
                  <span>{`$${Math.floor(artwork.price / 100).toLocaleString(
                    'en-US'
                  )}`}</span>
                </Prices>
                <Button
                  block
                  onClick={() => {
                    dispatch({ type: 'ADD_TO_CART', product: artwork });
                    console.log({ ...artwork, image: artwork.image.publicURL });
                    addItem(artwork);
                  }}
                >
                  Add To Basket
                </Button>
              </ArtAction>
            </Col>
          </Row>
        </Wrapper>
      </Section>
    </>
  );
};
export default Artwork;
