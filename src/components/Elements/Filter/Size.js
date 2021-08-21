import FilterItem from './FilterItem';
import { Slider as AntdSlider } from 'antd';
import React, { useContext } from 'react';
import { PosteriorContext } from '../../../context/PosteriorContext';
import styled from '@emotion/styled';

const marks = {
  0: 'S',
  1: 'M',
  2: 'L',
  3: 'XL',
  4: 'XXL',
};

function formatter(value) {
  let size;
  switch (value) {
    case 0:
      size = 0;
      break;
    case 1:
      size = 45;
      break;
    case 2:
      size = 200;
      break;
    case 3:
      size = 300;
      break;
    case 4:
      size = 500;
  }
  return size;
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

function Size() {
  const {
    state: { artworks, sources, artists, filter },
    dispatch,
  } = useContext(PosteriorContext);

  const handleSizeChange = (value) => {
    dispatch({
      type: 'SET_SIZE_FILTER',
      size: { min: value[0], max: value[1] },
    });
  };

  return (
    <FilterItem label="Size" mobileLabel>
      <Slider
        range
        tipFormatter={formatter}
        marks={marks}
        max={4}
        min={0}
        value={[filter.size.min, filter.size.max]}
        step={null}
        onChange={handleSizeChange}
        handleStyle={[{ border: '2px solid #222' }]}
      />
    </FilterItem>
  );
}

export default Size;
