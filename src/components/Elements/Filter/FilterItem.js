import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

const Root = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  padding-bottom: 10px;
  ${dynamicStyle};
`;

const FilterLabel = styled.span`
  display: inline;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  max-width: 100px;
  margin-right: 10px;
  text-align: right;
`;

const disableLabelOnMobile = css`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function FilterItem({ label, children, mobileLabel }) {
  return (
    <Root>
      <FilterLabel css={mobileLabel ? {} : disableLabelOnMobile}>
        {label}
      </FilterLabel>
      {children}
    </Root>
  );
}

export default FilterItem;
