import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import LogoImage from '../../images/svg/logo.svg';

const Root = styled.div`
  position: relative;
  height: 100%;
  min-height: 42px;
  overflow: hidden;
  z-index: 0;
  width: 120px;
  @media only screen and (min-width: 1024px) {
    margin-left: 25px;
    margin-right: 15px;
    height: 60px;
    width: 130px;
  }

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;
const LogoLink = styled(Link)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 100%;
  z-index: 1;
`;

function Logo() {
  return (
    <Root>
      <LogoLink to="/">
        <LogoImage />
      </LogoLink>
    </Root>
  );
}

export default Logo;
