import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Col, Row } from 'antd';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext, useState } from 'react';
import Wrapper from '../components/Elements/Wrapper';
import { PosteriorContext } from '../context/PosteriorContext';
import { Button as AntdButton } from 'antd';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import { useShoppingCart } from 'use-shopping-cart';
import Head from '../components/Layout/Head';

const Root = styled.div`
  background-color: #f4f2f1;
  padding: 50px 0;
`;
const Tile = styled.div`
  padding: 35px 20px;
  position: relative;
  background-color: #fff;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 600px) {
    padding: 45px;
  }
`;

const TileSummary = styled.div`
  padding: 35px 20px;
  position: relative;
  background-color: #fff;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 600px) {
    padding: 45px;
  }

  @media only screen and (max-width: 1023px) {
    background-color: transparent;
  }
`;

const TileList = styled.div``;

const Button = styled(AntdButton)`
  border: none;
  box-shadow: none;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
`;

const TileListItem = styled.div`
  padding: 20px 0 0;
  border-top: 1px solid #ececec;
  margin-top: 20px;
  :first-of-type {
    border: none;
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;

const CartItemContent = styled.div`
  @media only screen and (min-width: 600px) {
    margin-left: 160px;
  }
  position: relative;
`;

const CartItemContentMain = styled.div``;

const CartItemControls = styled.div`
  position: absolute;
  top: -7px;
  right: 0;
  font-size: 20px;
`;

const CartItemControlsSeperator = styled.span`
  display: inline-block;
  width: 2px;
  height: 18px;
  background-color: #ececec;
  vertical-align: middle;
`;

const CartItemMain = styled.div`
  &:after {
    content: ' ';
    display: block;
    float: none;
    clear: both;
  }
`;

const CartItemHeadings = styled.div`
  font-size: 14px;
  margin-right: 75px;
  h3 {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 150%;
    margin-bottom: 0;
  }
  h4 {
    font-weight: 300;
    line-height: 150%;
    text-transform: none;
    letter-spacing: 0.5px;
    margin-bottom: 0;
  }
`;

const CartItemDetails = styled.div`
  margin: 5px 0;
  font-size: 12px;
  color: #7c7876;
`;

const CartItemPrice = styled.div`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 300;
`;

const CartItemOptions = styled.div`
  margin: 10px 0;
`;

const CartItemOptionsRow = styled.div`
  margin: 10px 0;
`;

const CartItemOptionsLabel = styled.div`
  span:first-of-type {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const CartItemAdditional = styled.div`
  margin: 5px 0;
  margin-top: 15px;
  margin-right: 0px;
  margin-bottom: 5px;
  margin-left: 0px;
  font-size: 12px;
  color: #7c7876;
`;

const CartSummarySection = styled.div`
  margin: 0 auto;
  max-width: 550px;
  position: relative;
`;

const CartSummaryHeader = styled.header`
  display: flex;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
`;

const CartSummary = styled.div`
  margin: 0 auto;
  max-width: 550px;
`;

const CartSummaryList = styled.div``;

const CartSummaryRow = styled.div`
  margin: 15px 0;
`;

const CartSummaryRowLine = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const CartSummarySubTotal = styled.div`
  margin: 20px 0;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  border-top: 1px solid #343434;

  div {
    :first-of-type {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 10px;
    }
  }
`;

function Basket() {
  const {
    state: { cart },
    dispatch,
  } = useContext(PosteriorContext);
  const [status, setStatus] = useState('idle');
  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
    removeItem,
    clearCart,
    setItemQuantity,
  } = useShoppingCart();

  console.log(cartDetails);

  const handleCheckout = async (event) => {
    event.preventDefault();

    const response = await fetch('/.netlify/functions/redirect-to-checkout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    window.location = response.session.url;
  };

  return (
    <Root>
      <Head title="Basket" />
      <Wrapper>
        <Row
          justify="space-between"
          style={{ marginLeft: '-9px', marginRight: '-9px' }}
        >
          <Col
            span={24}
            lg={15}
            style={{ paddingLeft: '9px', paddingRight: '9px' }}
          >
            <Tile>
              <h2>Your Basket</h2>
              <TileList>
                {Object.values(cartDetails).map((artwork) => (
                  <TileListItem key={artwork.id}>
                    <CartItemMain>
                      <GatsbyImage
                        alt=""
                        image={getImage(artwork.image)}
                        css={css`
                          float: left;
                          margin-right: 20px;
                          width: 65px;
                          height: 65px;

                          @media only screen and (max-width: 599px) {
                            float: none;
                            margin-right: 0;
                            margin-bottom: 20px;
                            width: 100%;
                            height: auto;
                          }
                          @media only screen and (min-width: 600px) {
                            margin-right: 25px;
                            width: 135px;
                            height: 135px;
                          }
                        `}
                      />
                      <CartItemContent>
                        <CartItemControls>
                          <Button
                            type="default"
                            icon={<DeleteOutlined />}
                            onClick={() => removeItem(artwork.id)}
                          />
                          <CartItemControlsSeperator />
                          <Button type="default" icon={<HeartOutlined />} />
                        </CartItemControls>
                        <CartItemContentMain>
                          <CartItemHeadings>
                            <h3>{artwork.name}</h3>
                            <h4>By {artwork.artist}</h4>
                          </CartItemHeadings>
                          <CartItemDetails>
                            {`Paintings - ${Math.floor(
                              artwork.width / 10
                            )}x${Math.floor(artwork.height / 10)}cm`}
                          </CartItemDetails>
                          <CartItemPrice>
                            {artwork.formattedPrice}
                          </CartItemPrice>
                        </CartItemContentMain>
                        <CartItemOptions>
                          <CartItemOptionsRow>
                            <CartItemOptionsLabel>
                              <span>Qty</span>
                              {`: ${artwork.quantity}`}
                            </CartItemOptionsLabel>
                          </CartItemOptionsRow>
                        </CartItemOptions>
                        <CartItemAdditional>
                          Ships probably never.
                        </CartItemAdditional>
                      </CartItemContent>
                    </CartItemMain>
                  </TileListItem>
                ))}
              </TileList>
            </Tile>
          </Col>
          <Col
            span={24}
            lg={9}
            style={{ paddingLeft: '9px', paddingRight: '9px' }}
          >
            <TileSummary>
              <CartSummarySection>
                <CartSummaryHeader>
                  <h2>Total</h2>
                </CartSummaryHeader>
              </CartSummarySection>
              <CartSummary>
                <CartSummaryList>
                  <CartSummaryRow>
                    <CartSummaryRowLine>
                      <span>Subtotal</span>
                      <div>{formattedTotalPrice}</div>
                    </CartSummaryRowLine>
                  </CartSummaryRow>
                  <CartSummaryRow>
                    <CartSummaryRowLine>
                      <span>Shipping</span>
                      <div>Free</div>
                    </CartSummaryRowLine>
                  </CartSummaryRow>
                </CartSummaryList>
                <CartSummarySubTotal>
                  <div>Total</div>
                  <div>{formattedTotalPrice}</div>
                </CartSummarySubTotal>
                <Button block size="large" onClick={handleCheckout}>
                  Continue to Checkout
                </Button>
              </CartSummary>
            </TileSummary>
          </Col>
          <Col span={24}></Col>
        </Row>
      </Wrapper>
    </Root>
  );
}

export default Basket;
