import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Root = styled.nav`
  padding: 10px 0;
  color: #7c7876;
`;

const Item = styled.span`
  font-size: 14px;
  color: #7c7876;
  cursor: default;
`;

function Seperator() {
  return (
    <span
      css={css`
        margin: 0 7px;
      `}
    >
      |
    </span>
  );
}

function Breadcrumbs({ artist, name }) {
  return (
    <Root>
      <Item>Home</Item>
      <Seperator />
      <Item>All Artworks</Item>
      {artist && (
        <>
          <Seperator />
          <Item>{artist}</Item>
          <Seperator />
          <Item>{name}</Item>
        </>
      )}
    </Root>
  );
}

export default Breadcrumbs;
