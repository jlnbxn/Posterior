import styled from '@emotion/styled';
import React, { useEffect } from 'react';

const SearchModal = styled.ul`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  height: calc(100vh - 50px);
  align-items: flex-start;
  background-color: #fff;
  padding: 0;
  top: 100%;
  left: 0;
  position: absolute;
  min-width: 100%;
  z-index: 280;
`;

function Search({ open, setOpen }) {
  const html = document.querySelector('html');

  useEffect(() => {
    open ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible');
  }, [open]);

  return (
    <>
      <SearchModal open={open} />
    </>
  );
}

export default Search;
