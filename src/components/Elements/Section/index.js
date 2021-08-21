import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import breakpoints from '../../../utils/tokens/breakpoints';

const Root = styled.section`
  padding: 0;
  background-color: transparent;
  margin: 45px 0;
  background-color: ${(props) => (props.bg ? props.bg : '#fff')};
  @media only screen and (min-width: ${breakpoints.sm}) {
    padding: 0;
  }
  &:first-of-type {
    margin-top: 0;
    @media only screen and (min-width: ${breakpoints.sm}) {
    }
  }
`;

function Section({ children, bg }) {
  return <Root bg={bg}>{children}</Root>;
}

export default Section;
