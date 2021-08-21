import styled from '@emotion/styled';
import React from 'react';
import CloseButton from '../../../images/svg/close-button.svg';

const Root = styled.div`
  margin: -25px 0 25px;
  position: relative;
  background: #dfdcda;
  padding: 15px 30px 15px 15px;

  strong {
    display: block;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: 500;
  }
  button {
    height: auto;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    line-height: 1;
    text-align: left;
    font-family: Roboto, Arial, Helvetica, clean, sans-serif;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    span {
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
        vertical-align: baseline;
      }
    }
  }
`;

function UrgentMessage() {
  return (
    <Root>
      <strong>Original artwork:</strong>
      <span>Only 1 available. Get it before it’s gone.</span>
      <button>
        <span>
          <CloseButton />
        </span>
      </button>
    </Root>
  );
}

export default UrgentMessage;
