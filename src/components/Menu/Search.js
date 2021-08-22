import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { navigate } from 'gatsby';
import {
  Form as AntdForm,
  Input as AntdInput,
  Button as AntdButton,
} from 'antd';
import styled from '@emotion/styled';
import { PosteriorContext } from '../../context/PosteriorContext';

const { Item: AntdFormItem } = AntdForm;

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
  @media only screen and (min-width: 600px) {
    height: auto;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
  }
`;

const Form = styled(AntdForm)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 40px auto;
  @media only screen and (min-width: 600px) {
    width: 570px;
  }
  @media only screen and (min-width: 1024px) {
    width: 700px;
    margin: 50px auto;
  }
  .ant-input-prefix {
    margin-right: 4px;
    font-size: 24px;
    margin-left: 10px;
    color: #343434;
  }
  .ant-input {
    min-height: 46px;
    padding: 0;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      line-height: 1.5715;
      padding: 4px 11px;
      color: #000;
      opacity: 1; /* Firefox */
      font-size: 22px;
      font-weight: 300;
    }
  }
`;

const Item = styled(AntdFormItem)`
  width: 100%;
  min-height: 0;
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  .ant-form-item-control {
    width: 66.66666667%;
    flex: 1 1 auto;
  }
`;

const Input = styled(AntdInput)`
  background: transparent;
  border: 0;
  border-bottom: 1px solid #343434;
  box-shadow: none;
  font-weight: 300;
  font-family: Roboto, Arial, Helvetica, clean, sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding: 0;
  .ant-input-prefix {
    font-size: 24px;
  }
  > .ant-input-affix-wrapper {
    &:hover {
      border-color: #0500e8 !important;
    }
    border-color: #0500e8;
  }
`;

const CloseButton = styled(AntdButton)`
  position: absolute;
  top: 5px;
  right: 6px;
  padding: 0 5px;
  border: none;
  color: #343434;
  z-index: 281;
`;

const Button = styled(AntdButton)`
  padding: 0 5px;
  border: none;
  color: #343434;
  z-index: 281;
  color: #222;
  border-color: #222;
  background: transparent;
  border: 1px solid #222;
  height: 46px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 2px 35px;
  letter-spacing: 1px;
  font-weight: 400;
  display: block;
  width: 100%;
`;

function Search({ open, setOpen }) {
  const { dispatch } = useContext(PosteriorContext);

  const onFinish = (value) => {
    dispatch({ type: 'SET_SEARCH_FILTER', term: value.term });
    setOpen(false);
    navigate(`?q=${value.term}`);
  };

  return (
    <SearchModal open={open}>
      <div
        css={css`
          padding: 60px 30px 20px 20px;
          margin: 0 auto;
          background-color: transparent;
          width: 100%;
        `}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          layout="horizontal"
          size="large"
          css={css`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 100%;
            margin: 40px auto;
          `}
        >
          <Item
            name="term"
            rules={[
              {
                required: true,
                message:
                  'Search is a required field, please make sure it is not empty',
              },
            ]}
            wrapperCol={{ span: 24 }}
            css={css`
              width: 100%;
              @media only screen and (min-width: 600px) {
                width: 55%;
              }
            `}
          >
            <Input
              placeholder="What Are You Looking For?"
              prefix={<SearchOutlined />}
            />
          </Item>

          <Item
            wrapperCol={{ span: 24 }}
            labelCol={{ span: 24 }}
            css={css`
              width: 100%;
              @media only screen and (min-width: 600px) {
                width: 35%;
              }
            `}
          >
            <Button block size={'large'} htmlType="submit">
              Search the site
            </Button>
          </Item>
        </Form>
      </div>
      <CloseButton
        type="default"
        onClick={() => setOpen(false)}
        icon={<CloseOutlined />}
      />
    </SearchModal>
  );
}

export default Search;
