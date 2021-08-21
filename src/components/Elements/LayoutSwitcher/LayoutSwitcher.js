import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Select as AntdSelect } from 'antd';
import React, { useContext } from 'react';
import { PosteriorContext } from '../../../context/PosteriorContext';
import FilterItem from '../Filter/FilterItem';
import Square from '../../../images/svg/layout-square.svg';
import Fluid from '../../../images/svg/layout-fluid.svg';

const { Option } = AntdSelect;

const MasonryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const MasonryLayoutSwitch = styled.div`
  display: table;
  float: right;
`;

const MasonryCounter = styled.span`
  line-height: 30px;
  padding-right: 15px;
  vertical-align: middle;
  @media only screen and (max-width: 599px) {
    display: none;
  }
`;

const MasonryLayoutSwitchButton = styled.button`
  display: table-cell;
  height: auto;
  border: none;
  vertical-align: middle;
  background: transparent;
  padding: 0 4px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  width: auto;
  cursor: pointer;
  &:hover {
    .anticon {
      color: #0500e8;
    }
  }
  .anticon {
    color: ${(props) => (props.active ? '#0500e8' : '#343434')};
    svg {
      vertical-align: baseline;
    }
  }
  &:last-of-type {
    padding-right: 0;
  }
  span {
    font-style: normal;
    display: inline-block;
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    color: #343434;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

const Select = styled(AntdSelect)`
  border-color: #0500e8;
  background: transparent;
  min-width: 155px;
  text-align: left;
  flex-grow: 1;
  border: 0;
  border-bottom: 1px solid #343434;
  box-shadow: none;
  font-weight: 300;
  font-family: Roboto, Arial, Helvetica, clean, sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
  .ant-select-selector {
    z-index: 1;

    padding: 0 11px;

    border: none;

    position: relative;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    width: 100%;
  }
`;

function LayoutSwitcher({ layout, setLayout }) {
  const {
    state: { artworks },
    dispatch,
  } = useContext(PosteriorContext);

  const handleSortChange = (value) => {
    dispatch({ type: 'SORT_ARTWORKS', sort: value });
  };

  return (
    <MasonryHeader>
      <FilterItem label="sort" mobileLabel>
        <Select
          size="large"
          bordered={false}
          showArrow="single"
          defaultValue="Artist"
          style={{ width: '100%' }}
          onChange={handleSortChange}
          css={css`
            border-bottom: 1px solid #343434;
          `}
        >
          <Option value="artist" key="Artist">
            Artist
          </Option>
          <Option value="year" key="Year">
            Year
          </Option>
          <Option value="source" key="Source">
            Source
          </Option>
        </Select>
      </FilterItem>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <MasonryCounter>{`showing ${
          artworks && artworks.length
        } pieces`}</MasonryCounter>
        <MasonryLayoutSwitch>
          <MasonryLayoutSwitchButton
            onClick={() => setLayout('square')}
            active={layout === 'square'}
          >
            <span className="anticon">
              <Square />
            </span>
          </MasonryLayoutSwitchButton>

          <MasonryLayoutSwitchButton
            onClick={() => setLayout('fluid')}
            active={layout === 'fluid'}
          >
            <span className="anticon">
              <Fluid />
            </span>
          </MasonryLayoutSwitchButton>
        </MasonryLayoutSwitch>
      </div>
    </MasonryHeader>
  );
}

export default LayoutSwitcher;
