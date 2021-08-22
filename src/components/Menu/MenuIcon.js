import styled from '@emotion/styled';
import React from 'react';

export const StyledBurger = styled.button`
  align-self: center;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 100%;
    height: 1px;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

function MenuIcon() {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default MenuIcon;
