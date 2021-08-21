import styled from '@emotion/styled';
import React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

const CardWrapper = styled.div`
  max-width: 340px;
  padding: 15px 10px;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    padding: 15px;
  }
`;

const CardInner = styled.div`
  border: 1px solid #ececec;
`;

const CardContent = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

const CardFooter = styled.div`
  border-top: 1px solid #ececec;
  padding: 0 10px;

  button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    width: 40px;
    height: 40px;
    border: 0;
    color: #343434;
    border-color: #fff;
    background: transparent;
  }
`;

const CardHeading = styled.h4`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  cursor: pointer;
`;

const CardDetail = styled.div`
  margin-top: 3px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  cursor: default;
  h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-left: 5px;
    white-space: nowrap;
  }
`;
const Love = styled.span`
  width: 1em;
  font-size: 20px;
  height: 1em;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  fill: currentColor;
  display: inline-block;
  svg {
    width: 1em;
    height: 1em;
    vertical-align: baseline;
  }
`;

const CardAdditionalContent = styled.div`
  margin-top: 3px;
  span {
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 150%;
    text-transform: none;
    color: #7c7876;
    display: block;
    font-weight: 300;
  }
`;

const square = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const container = css`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const dummy = css`
  margin-top: 100%;
`;

function Card({ title, artist, price, height, width, image, id, layout }) {
  return (
    <CardWrapper>
      <CardInner>
        <div css={layout === 'square' ? container : {}}>
          {layout === 'square' ? <div css={dummy}></div> : <></>}
          <GatsbyImage
            image={getImage(image)}
            onClick={() => navigate(`/art/${id}`)}
            alt=""
            css={[
              css`
                cursor: pointer;
              `,
              layout === 'square' ? square : {},
            ]}
          />
        </div>

        <CardContent>
          <CardHeading>{title}</CardHeading>
          <CardDetail>
            <h5>{artist}</h5>
            <span>{`$${Math.floor(price / 100).toLocaleString('en-US')}`}</span>
          </CardDetail>
          <CardAdditionalContent>
            <span>{`Paintings - ${Math.floor(width / 10)}x${Math.floor(
              height / 10
            )}cm`}</span>
          </CardAdditionalContent>
        </CardContent>
        <CardFooter>
          <button>
            <Love>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M16 30.618l-0.991-1.067c-0.444-0.48-0.889-0.947-1.333-1.409s-0.827-0.889-1.231-1.298l-0.231-0.244c-5.809-6.12-10.4-10.951-10.4-16.187 0-5.587 4.062-8.511 8.076-8.511 2.711 0 4.889 2.142 6.111 3.747 1.24-1.596 3.404-3.733 6.12-3.733 5.244 0 8.071 4.378 8.071 8.498 0 5.218-4.662 10.133-10.56 16.356l-0.076 0.084-1.302 1.369-1.271 1.333zM9.889 4.124c-2.818 0-5.853 1.969-5.853 6.289s4.32 8.889 9.778 14.667l0.249 0.253c0.404 0.444 0.813 0.858 1.222 1.293l0.716 0.738 0.636-0.671 1.382-1.444c5.538-5.876 9.951-10.507 9.951-14.836 0-4.12-2.942-6.276-5.849-6.276-1.996 0-4 2.089-5.169 4.040l-0.951 1.56-0.951-1.56c-1.187-1.956-3.169-4.053-5.16-4.053z"></path>
              </svg>
            </Love>
          </button>
        </CardFooter>
      </CardInner>
    </CardWrapper>
  );
}

export default Card;
