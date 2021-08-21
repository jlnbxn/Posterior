import styled from '@emotion/styled';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import FilterItem from './FilterItem';
import { DownOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Button from '../Button/Button';

const Select = styled.div`
  flex-grow: 1;
  min-width: 100px;
`;

const SelectInput = styled.div`
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  font-family: Roboto, Arial, Helvetica, clean, sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding-left: 10px;
  padding-right: 20px;
  line-height: 40px;
  height: 40px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #343434;
  &:hover {
    border-color: #0500e8;
    border-width: 2px;
    .anticon {
      color: #0500e8;
    }
  }
  .anticon {
    position: absolute;
    top: 0;
    right: 10px;
    display: block;
    font-size: 14px;
    color: #343434;
    ${(props) => (props.open ? 'transform: rotate(180deg);' : '')}
  }
`;

const SelectDropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  background-color: rgba(244, 242, 241, 0.85);
  z-index: 600;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  @media only screen and (min-width: 600px) {
    ${(props) => (props.open ? 'display: block;' : '')};
    position: relative;
    background: transparent;
    width: auto;
    height: auto;
    top: -2px;
    padding: 0;
    z-index: auto;
  }
`;

const SelectDropdownList = styled.div`
  position: relative;
  width: 100%;
  align-self: center;
  background-color: #fff;
  border: 1px solid #b6b5b1;
  font-size: 14px;
  line-height: 40px;
  z-index: 90;
  @media only screen and (min-width: 600px) {
    position: absolute;
    right: 0;
    height: auto;
    min-width: 200px;
    align-self: auto;
  }
`;
const SelectDropdownListTitle = styled.div`
  position: relative;
  display: block;
  min-height: 60px;
  line-height: 60px;
  padding: 0 40px 0 10px;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const SelectDropdownListContent = styled.ul`
  max-height: 75vh;
  overflow-y: auto;
  @media only screen and (min-width: 300px) {
    max-height: 300px;
  }
`;

const SelectDropdownListSummary = styled.li`
  min-height: 60px;
  padding: 10px;
  background: #dfdcda;
  line-height: 110%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;

  & > div:last-child {
    min-width: 75px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  > div:first-of-type {
    width: calc(100% - 80px);
    & > div:first-of-type {
      text-transform: uppercase;
    }
    & > div {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const SelectDropdownListSummaryButton = styled.div`
  cursor: pointer;
  padding: 2px 5px;
  border-color: #343434;
  font-weight: 400;
  color: #343434;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 100%;

  width: auto;

  line-height: 22px;

  display: inline-block;

  text-transform: uppercase;

  height: 30px;
  font-size: 12px;

  background: transparent;

  transition: none;
  border-width: 2px;
  border-style: solid;
  text-align: center;
  min-width: 0;
  box-shadow: none;

  &:hover {
    background: #fff;
  }
`;

const SelectDropdownListItem = styled.li`
  position: relative;
  font-weight: 300;
  line-height: 40px;
  border-bottom: 1px solid #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  div {
    display: block;
    padding: 5px 15px 5px 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    position: relative;
    z-index: 1;

    padding-right: 30px;

    &:hover {
      background-color: #c0bff9;
      & > .anticon {
        display: block;
      }
    }
    & > .anticon {
      position: absolute;
      top: 0;
      left: 5px;
      display: none;
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 18px;
      text-align: center;
      z-index: 0;
    }
  }
  & > .anticon {
    position: absolute;
    top: 0;
    right: 10px;
    display: none;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 18px;
    text-align: center;
    z-index: 0;
  }
`;

const selected = css`
  .anticon {
    display: block !important;
  }
  &:hover {
    & > .anticon {
      display: block !important;
    }
  }

  & > div {
    z-index: 0;
    & > .anticon {
      display: block !important;
    }
  }
  background-color: #c0bff9;
`;

function FilterSelect({ source, filter, action, clearAll, count, label }) {
  const [open, setOpen] = useState(false);

  return (
    <FilterItem label={label}>
      <Select onClick={() => setOpen(!open)}>
        <SelectInput>
          {`All ${label}`}
          <DownOutlined />
        </SelectInput>
        <SelectDropdown open={open}>
          <SelectDropdownList>
            <SelectDropdownListTitle>
              {`Select ${label}`}
              <Button></Button>
            </SelectDropdownListTitle>

            <SelectDropdownListContent>
              <SelectDropdownListSummary>
                <div>
                  <div>{count} selected</div>
                  {filter.length > 0 && <div>{filter.join(', ')}</div>}
                </div>
                {filter.length > 0 && (
                  <div>
                    <div>
                      <SelectDropdownListSummaryButton
                        onClick={() => clearAll()}
                      >
                        Clear All
                      </SelectDropdownListSummaryButton>
                    </div>
                  </div>
                )}
              </SelectDropdownListSummary>

              {source &&
                source
                  .sort((a) => {
                    if (filter.includes(a)) {
                      return -1;
                    }
                    return 1;
                  })
                  .map((item) => (
                    <SelectDropdownListItem
                      css={filter.includes(item) ? selected : {}}
                      key={item}
                    >
                      <div value={item} key={item} onClick={() => action(item)}>
                        <span>{item}</span>
                        <CheckOutlined />
                      </div>
                      <CloseOutlined />
                    </SelectDropdownListItem>
                  ))}
            </SelectDropdownListContent>
          </SelectDropdownList>
        </SelectDropdown>
      </Select>
    </FilterItem>
  );
}

export default FilterSelect;
