import React from 'react';
import { Button as AntdButton } from 'antd';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const large = css`
  height: 46px;
  font-size: 16px;
  font-weight: 400;
  padding: 2px 35px;
`;

const Root = styled(AntdButton)`
  ${(props) => (props.size === 'large' ? large : '')}
`;

function Button({ size, children }) {
  return <Root size={size}>{children}</Root>;
}

export default Button;
