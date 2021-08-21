import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { PosteriorContext } from '../../../context/PosteriorContext';
import FilterItem from './FilterItem';
import { CheckOutlined } from '@ant-design/icons';
import FilterSelect from './FilterSelect';

const ColorPicker = styled.ul`
  flex-grow: 1;
  margin-bottom: 0;
  padding: 0;
`;

const ColorElement = styled.li`
  cursor: pointer;
  display: inline-block;
  font-size: 0;
  height: 40px;
  line-height: 40px;
  position: relative;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;

  div {
    display: inline-block;
    height: 100%;
    width: 100%;
    user-select: none;
  }
`;

const ColorBox = styled.span`
  border: 1px solid #dfdcda;
  width: 24px;
  height: 28px;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
`;

const palette = [
  {
    name: 'Colorful',
    css: css`
      background: linear-gradient(90deg, #5c007b 64.34%, transparent 0) 0 0,
        linear-gradient(-90deg, #ff7b00 64.34%, transparent 0) 100% 0,
        linear-gradient(90deg, transparent 35.66%, #fff15f 0) 100% 100%,
        linear-gradient(-90deg, transparent 35.66%, #0070cc 0) 0 100%,
        #c00 linear-gradient(#393, #393) 50% 100%;
      background-repeat: no-repeat;
      background-size: 50% 50%; ;
    `,
  },
  {
    name: 'Black & White',
    css: css`
      background: linear-gradient(270deg, #000 50%, #fff 0);
      border: 1px solid #dfdcda; ;
    `,
  },
  {
    name: 'White',
    css: css`
      background-color: #fff;
    `,
  },
  {
    name: 'Black',
    css: css`
      background-color: #000;
    `,
  },
  {
    name: 'Maroon Neutral',
    css: css`
      background-color: #5f3401;
    `,
  },
  {
    name: 'Orange',
    css: css`
      background-color: #ff7b00;
    `,
  },
  {
    name: 'Yellow',
    css: css`
      background-color: #fff15f;
    `,
  },
  {
    name: 'Green',
    css: css`
      background-color: #393;
    `,
  },
  {
    name: 'Blue',
    css: css`
      background-color: #30c;
    `,
  },
  {
    name: 'Purple',
    css: css`
      background-color: #5c007b;
    `,
  },
  {
    name: 'Pink',
    css: css`
      background-color: #f29fc5;
    `,
  },
  {
    name: 'Red',
    css: css`
      background-color: #c00;
    `,
  },
];

function Color({ mobile }) {
  const {
    state: { filter, colors },
    dispatch,
  } = useContext(PosteriorContext);

  const handleColorChange = (value) => {
    console.log(value);
    dispatch({
      type: 'SET_COLOR_FILTER',
      color: value,
    });
  };

  if (!mobile)
    return (
      <FilterItem label="Color">
        <ColorPicker>
          {palette.map((el) => (
            <ColorElement key={el.name}>
              <div onClick={() => handleColorChange(el.name)}>
                <ColorBox css={el.css}>{el.name}</ColorBox>
                {filter && filter.color.includes(el.name) && (
                  <CheckOutlined
                    css={css`
                      opacity: 1;
                      display: block;
                      font-size: 16px;
                      color: #343434;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translateY(-50%) translateX(-50%);
                    `}
                  />
                )}
              </div>
            </ColorElement>
          ))}
        </ColorPicker>
      </FilterItem>
    );

  return (
    <>
      <FilterSelect
        source={colors}
        action={handleColorChange}
        count={0 || filter.color.length}
        label={'Colors'}
        filter={filter.color}
        clearAll={() => dispatch({ type: 'CLEAR_COLOR_FILTER' })}
      />
    </>
  );
}

export default Color;
