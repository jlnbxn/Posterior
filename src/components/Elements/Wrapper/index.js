import styled from '@emotion/styled';
import React from 'react';
import breakpoints from '../../../utils/tokens/breakpoints';

const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: transparent;
  padding: 0 20px;
  @media only screen and (min-width: ${breakpoints.sm}) {
    max-width: 1440px;
    padding: 0 25px;
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    max-width: 1440px;
    padding: 0 25px;
  }
  @media only screen and (min-width: ${breakpoints.lg}) {
    max-width: 1190px;
    max-width: ${(props) => (props.wide ? '1440px' : '1190px')};

    padding: 0 25px;
  }
  @media only screen and (min-width: ${breakpoints.xl}) {
    max-width: 1190px;
    max-width: ${(props) => (props.wide ? '1440px' : '1190px')};

    padding: 0 25px;
  }
`;

function Wrapper({ children, wide }) {
  return <Root wide={wide}>{children}</Root>;
}

export default Wrapper;
