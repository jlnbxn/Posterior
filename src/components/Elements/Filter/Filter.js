import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import { Row, Col, Select } from 'antd';
import { css } from '@emotion/react';
import Color from './Color';
import { PosteriorContext } from '../../../context/PosteriorContext';
import Size from './Size';
import Price from './Price';
import Orientation from './Orientation';
import FilterSelect from './FilterSelect';
import { navigate } from 'gatsby';

const Root = styled.section`
  background-color: #f4f2f1;
  padding: 0;
`;

const col = css`
  position: inherit;
  padding-left: 8px;
  padding-right: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #dfdcda;
  text-align: center;
  span {
    font-weight: 500;
    cursor: pointer;
  }
`;

function Filter() {
  const {
    state: { sources, artists, years, filter },
    dispatch,
  } = useContext(PosteriorContext);

  const [expanded, setExpanded] = useState(false);

  const handleSourceChange = (value) => {
    dispatch({
      type: 'SET_SOURCE_FILTER',
      source: value,
    });
  };
  const handleArtistChange = (value) => {
    dispatch({
      type: 'SET_ARTIST_FILTER',
      artist: value,
    });
  };

  const handleYearChange = (value) => {
    dispatch({
      type: 'SET_YEAR_FILTER',
      year: value,
    });
  };

  const clearAllFilters = () => {
    navigate('/');
    dispatch({ type: 'CLEAR_ALL_FILTERS' });
  };

  return (
    <Root>
      <Row
        justify="space-between"
        style={{ marginLeft: '-8px', marginRight: '-8px' }}
      >
        <Col span={12} md={{ span: 8, order: 0 }} css={col}>
          <FilterSelect
            source={artists}
            action={handleArtistChange}
            count={0 || filter.artist.length}
            label={'Artists'}
            filter={filter.artist}
            clearAll={() => dispatch({ type: 'CLEAR_ARTIST_FILTER' })}
          />
        </Col>
        <Col span={12} md={{ span: 8, order: 1 }} css={col}>
          <FilterSelect
            source={sources}
            action={handleSourceChange}
            count={0 || filter.source.length}
            label={'Sources'}
            filter={filter.source}
            clearAll={() => dispatch({ type: 'CLEAR_SOURCE_FILTER' })}
          />
        </Col>

        <Col span={24} md={{ span: 12, order: 3 }} css={col}>
          <Price />
        </Col>

        <Col span={expanded ? 12 : 0} md={{ span: 8, order: 1 }} css={col}>
          <FilterSelect
            source={years}
            action={handleYearChange}
            count={0 || filter.year.length}
            label={'Years'}
            filter={filter.year}
            clearAll={() => dispatch({ type: 'CLEAR_YEAR_FILTER' })}
          />
        </Col>

        <Col span={0} md={{ span: expanded ? 17 : 0, order: 6 }}>
          <Color mobile={false} />
        </Col>

        <Col span={expanded ? 12 : 0} md={{ span: 0 }} css={col}>
          <Color mobile={true} />
        </Col>

        <Col span={expanded ? 24 : 0} md={{ span: 12, order: 4 }} css={col}>
          <Size />
        </Col>

        <Col
          span={expanded ? 10 : 0}
          md={{ span: expanded ? 7 : 0, order: 5 }}
          css={col}
        >
          <Orientation />
        </Col>

        <Col span={24} order={7}>
          <Footer>
            <span onClick={clearAllFilters}>Clear all Filters</span>
            <span onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Show Fewer Filters' : 'Show More Filters'}
            </span>
          </Footer>
        </Col>
      </Row>
    </Root>
  );
}

export default Filter;
