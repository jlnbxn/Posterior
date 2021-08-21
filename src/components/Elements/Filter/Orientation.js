import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { PosteriorContext } from '../../../context/PosteriorContext';
import FilterItem from './FilterItem';

const OrientationElement = styled.li`
  cursor: pointer;
  margin-right: 0;
  display: inline-block;
  font-size: 0;
  height: 40px;
  line-height: 40px;
  position: relative;
  text-align: center;
  margin-left: 5px;
  div {
    display: inline-block;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    span {
      border-radius: 0;
      color: #fff;
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      background-color: transparent;
      border: 1px solid #343434;
    }
  }
`;

const square = css`
  height: 22px;
  width: 22px;
  line-height: 22px;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #343434;
`;
const portrait = css`
  height: 26px;
  width: 18px;
  line-height: 26px;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #343434;
`;
const landscape = css`
  height: 18px;
  width: 26px;
  line-height: 18px;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #343434;
`;

const active = css`
  background-color: #343434;
`;

function Orientation() {
  const {
    state: { filter },
    dispatch,
  } = useContext(PosteriorContext);
  const handleOrientationChange = (value) => {
    dispatch({ type: 'SET_ORIENTATION_FILTER', orientation: value });
  };
  return (
    <FilterItem label={'Orientation'} mobileLabel>
      <OrientationElement onClick={() => handleOrientationChange('square')}>
        <span
          css={[square, filter.orientation.includes('square') ? active : {}]}
        ></span>
      </OrientationElement>
      <OrientationElement onClick={() => handleOrientationChange('portrait')}>
        <span
          css={[
            portrait,
            filter.orientation.includes('portrait') ? active : {},
          ]}
        ></span>
      </OrientationElement>
      <OrientationElement onClick={() => handleOrientationChange('landscape')}>
        <span
          css={[
            landscape,
            filter.orientation.includes('landscape') ? active : {},
          ]}
        ></span>
      </OrientationElement>
    </FilterItem>
  );
}

export default Orientation;
