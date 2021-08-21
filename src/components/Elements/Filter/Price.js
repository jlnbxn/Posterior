import FilterItem from './FilterItem';
import { Slider as AntdSlider } from 'antd';
import React, { useContext } from 'react';
import { PosteriorContext } from '../../../context/PosteriorContext';
import styled from '@emotion/styled';

const marks = {
  0: '0',
  1: '',
  2: '200',
  3: '',
  4: '500',
  5: '',
  6: '2000',
  7: '',
  8: '',
  9: 'Max',
};

function formatter(value) {
  let price;
  switch (value) {
    case 0:
      price = 0;
      break;
    case 1:
      price = 100;
      break;
    case 2:
      price = 200;
      break;
    case 3:
      price = 300;
      break;
    case 4:
      price = 500;
      break;
    case 5:
      price = 1000;
      break;
    case 6:
      price = 2000;
      break;
    case 7:
      price = 5000;
      break;
    case 8:
      price = 10000;
      break;
    case 9:
      price = 15000;
  }
  return price;
}

const Slider = styled(AntdSlider)`
  flex-grow: 1;

  margin: 14px 20px;
  width: 100%;
  touch-action: none;
  margin-left: 20px;
  margin-top: 14px;

  .slick-list,
  .slick-track {
    touch-action: pan-y;
  }

  &:hover {
    .ant-slider-rail {
      background-color: #b6b5b1;
    }

    .ant-slider-dot {
      border-color: #b6b5b1;
    }
  }

  .ant-slider-rail {
    transition: none;
    background-color: #dfdcda;
  }

  .ant-slider-dot {
    border-color: #dfdcda;
  }

  .ant-slider-track {
    background-color: #222222;
    transition: none;
    touch-action: pan-y;
  }
  .ant-slider-handle:focus {
    box-shadow: 0 0 0 5px #222222;
  }

  &:hover .ant-slider-track {
    background-color: #222222;
  }

  &:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #222222;
  }

  &:hover .ant-slider-handle-click-focused,
  &:hover .ant-slider-handle-click-focused:focus {
    box-shadow: none;
    border-color: #222222;
  }

  .ant-slider:hover .ant-slider-handle,
  .ant-slider-handle,
  .ant-slider-dot.ant-slider-dot-active {
    border-color: #222222;
  }

  .ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging {
    border-color: #222222;
    box-shadow: none;
  }

  .ant-slider-handle-dragging {
    border-color: #222222;
  }

  .ant-slider-handle:active,
  .ant-slider-handle:focus {
    box-shadow: none;
  }

  .ant-slider-mark {
    .slider-mark-text {
      font-size: 13px;
      text-transform: uppercase;
    }
  }

  .ant-slider-with-marks {
    margin-bottom: 0;
  }
`;

function Price() {
  const {
    state: { artworks, sources, artists, filter },
    dispatch,
  } = useContext(PosteriorContext);

  const handlePriceChange = (value) => {
    console.log(value);
    dispatch({
      type: 'SET_PRICE_FILTER',
      range: { min: value[0], max: value[1] },
    });
  };

  return (
    <FilterItem label="Price" mobileLabel>
      <Slider
        range
        tipFormatter={formatter}
        marks={marks}
        max={9}
        min={0}
        value={[filter.range.min, filter.range.max]}
        step={null}
        onChange={handlePriceChange}
      />
    </FilterItem>
  );
}

export default Price;
