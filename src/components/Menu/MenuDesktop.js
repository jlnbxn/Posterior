import styled from '@emotion/styled';
import { Col, Row } from 'antd';
import { navigate } from 'gatsby';
import React, { useState } from 'react';
import Logo from './Logo';
import { UserOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import ShoppingCartWithBadge from './ShoppingCartWithBadge';
import Search from '../Elements/Search';

const Header = styled.header`
  position: relative;
  width: 100%;
  min-width: 320px;
  height: 50px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
  z-index: 220;
  margin: 0 auto;
  max-width: 1440px;
  @media only screen and (min-width: 1024px) {
    height: 60px;
  }
`;

const Menu = styled.ul`
  border: 0;
  box-shadow: none;
  z-index: 0;

  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  z-index: auto;
  color: #343434;
  line-height: 46px;
  transition: background 0.3s, width 0.3s;
  @media only screen and (min-width: 600px) {
    margin-right: 10px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }

  position: static;
  top: 0;
  display: block;
  background: none;
  white-space: nowrap;
  border-bottom: none;
  box-shadow: none;
  height: 100%;
`;
const SubMenu = styled.li`
  margin-top: 0;
  transition: none;
  position: relative;
  top: 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
  @media only screen and (min-width: 1024px) {
    position: static;
    height: 100%;
  }
`;

const SubMenuTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  transition: none;
  padding: 0 3px;
  margin: 0;
  position: relative;
  display: block;
  white-space: nowrap;

  display: table-cell;

  .anticon {
    margin-right: 0;
    padding: 0 4px;
    font-size: 18px;
    min-width: 14px;
    margin-right: 8px;
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    svg {
      margin-top: -4px;
    }
  }

  @media only screen and (min-width: 600px) {
    padding: 0 10px;
  }
  @media only screen and (min-width: 1024px) {
    height: 100%;
    display: table;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    padding: 0 5px;
  }
`;

const SubMenuLink = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  transition: none;
  display: table-cell;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    padding-top: 2px;
    vertical-align: middle;
  }
`;

const submenus = [
  {
    title: 'Paintings',
    route: '/',
  },
  {
    title: 'Prints',
    route: '/',
  },
  {
    title: 'Photos',
    route: '/',
  },
  {
    title: 'Drawings',
    route: '/',
  },
  {
    title: 'Sculpture',
    route: '/',
  },
  {
    title: 'Artists',
    route: '/',
  },
  {
    title: 'Advisory',
    route: '/',
  },
  {
    title: 'Blog',
    route: '/',
  },
];

const icons = [
  {
    title: 'User',
    route: '/',
    component: <UserOutlined />,
  },
  {
    title: 'Basket',
    route: '/basket',
    component: <ShoppingCartWithBadge />,
  },

  {
    title: 'Paintings',
    route: '/',
    component: <HeartOutlined />,
  },
];

function MainMenu() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Header>
      <Row
        justify="space-between"
        css={css`
          max-width: 1440px;
          margin: 0 auto;
        `}
      >
        <Col>
          <Logo />
        </Col>
        <Col>
          <Menu>
            {submenus.map((submenu) => (
              <SubMenu key={submenu.title}>
                <SubMenuTitle>
                  <SubMenuLink to={submenu.route}>{submenu.title}</SubMenuLink>
                </SubMenuTitle>
              </SubMenu>
            ))}
          </Menu>
        </Col>
        <Col>
          <Menu>
            {icons.map((icon) => (
              <SubMenu key={icon.title}>
                <SubMenuTitle>
                  <SubMenuLink onClick={() => navigate(icon.route)}>
                    {icon.component}
                  </SubMenuLink>
                </SubMenuTitle>
              </SubMenu>
            ))}
            <SubMenu>
              <SubMenuTitle>
                <SubMenuLink onClick={() => setSearchOpen(!searchOpen)}>
                  <SearchOutlined />
                </SubMenuLink>
              </SubMenuTitle>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
      <Search open={searchOpen} />
    </Header>
  );
}

export default MainMenu;
