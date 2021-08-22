import styled from '@emotion/styled';
import { Col, Row, Button } from 'antd';
import { Link, navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import HeaderLogo from '../../images/svg/logo.svg';
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import ShoppingCartWithBadge from './ShoppingCartWithBadge';
import Search from './Search';
import { useMediaQuery } from 'react-responsive';

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

const MenuWrapper = styled.ul`
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
  position: static;
  top: 0;
  display: block;
  background: none;
  white-space: nowrap;
  border-bottom: none;
  box-shadow: none;
  height: 100%;
  @media only screen and (min-width: 600px) {
    margin-right: 10px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
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

const HamburgerButton = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  display: inline-block;
`;

const HamburgerIcon = styled.span`
  background-color: #000;
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
  user-select: none;
  display: block;
  width: 25px;
  height: 3px;
  &:before {
    background-color: #000;
    top: -8px;
    position: absolute;
    content: '';
    display: block;
    width: 25px;
    height: 3px;
  }
  &:after {
    background-color: #000;
    top: 8px;
    position: absolute;
    content: '';
    display: block;
    width: 25px;
    height: 3px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 42px;
  overflow: hidden;
  z-index: 0;
  margin-bottom: 0;
  width: 120px;
`;
const LogoLink = styled(Link)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 100%;
  z-index: 1;
`;

const MenuHorizontal = styled.ul`
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  z-index: 280;
  color: #343434;
  line-height: 46px;
  transition: background 0.3s, width 0.3s;
  border: 0;
  box-shadow: none;
  z-index: 0;
  float: right;
`;

const MenuItem = styled.li`
  top: 0;
  display: inline-block;
`;

const IconWrapper = styled.div`
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  width: 100%;
  transition: none;
  padding: 0 3px;
  .anticon {
    font-size: 18px;
  }
`;

const Drawer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const DrawerHeader = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 10px;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #ececec;
  z-index: 1;
`;

const DrawerMenu = styled.ul`
  display: block;
  width: auto;
  border-right: none;
  background-color: #fff;
  flex: 1 1;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  z-index: 280;
  color: #343434;
  line-height: 46px;
  transition: background 0.3s, width 0.3s;
  padding: 0;
`;

const DrawerSubMenu = styled.li`
  top: 0;
  margin-top: 0;
  transition: none;
`;

const DrawerSubMenuTitle = styled.div`
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ececec;
  padding-right: 0;
  padding-left: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  transition: none;
  a {
    color: initial;
    padding-left: 15px;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
  }
`;

const isBrowser = typeof window !== 'undefined';

let html;

function Menu() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (isBrowser) {
    html = document.querySelector('html');
  }

  useEffect(() => {
    searchOpen || drawerOpen
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible');
  }, [searchOpen]);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1023px)',
  });

  if (isDesktopOrLaptop)
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
            <MenuWrapper>
              {submenus.map((submenu) => (
                <SubMenu key={submenu.title}>
                  <SubMenuTitle>
                    <SubMenuLink to={submenu.route}>
                      {submenu.title}
                    </SubMenuLink>
                  </SubMenuTitle>
                </SubMenu>
              ))}
            </MenuWrapper>
          </Col>
          <Col>
            <MenuWrapper>
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
            </MenuWrapper>
          </Col>
        </Row>
        <Search open={searchOpen} setOpen={() => setSearchOpen()} />
      </Header>
    );
  return (
    <Header>
      <Row
        css={css`
          height: 100%;
          margin: 0 auto;
          max-width: 1440px;
        `}
      >
        <Col
          css={css`
            position: static;
            height: 100%;
            flex: 1 1;
          `}
        >
          <HamburgerButton onClick={() => setDrawerOpen(true)}>
            <HamburgerIcon />
          </HamburgerButton>
          {drawerOpen && (
            <Drawer>
              <DrawerHeader>
                <LogoWrapper>
                  <LogoLink to="/">
                    <HeaderLogo
                      css={css`
                        display: block;
                        max-width: 100%;
                        max-height: 100%;
                      `}
                    />
                  </LogoLink>
                </LogoWrapper>
                <Button
                  icon={<CloseOutlined />}
                  onClick={() => setDrawerOpen(false)}
                  css={css`
                    border: none;
                    box-shadow: none;
                  `}
                />
              </DrawerHeader>
              <DrawerMenu>
                <DrawerSubMenu>
                  <DrawerSubMenuTitle>
                    {submenus.map((menuItem) => (
                      <DrawerSubMenuTitle onClick={() => setDrawerOpen(false)}>
                        <Link to={menuItem.route}>{menuItem.title}</Link>
                      </DrawerSubMenuTitle>
                    ))}
                  </DrawerSubMenuTitle>
                </DrawerSubMenu>
              </DrawerMenu>
            </Drawer>
          )}
        </Col>

        <Col>
          <Logo>
            <LogoLink to="/">
              <HeaderLogo
                css={css`
                  display: block;
                  max-width: 100%;
                  max-height: 100%;
                `}
              />
            </LogoLink>
          </Logo>
        </Col>

        <Col
          css={css`
            position: static;
            height: 100%;
            flex: 1 1;
          `}
        >
          <MenuHorizontal>
            <MenuItem>
              <IconWrapper onClick={() => setSearchOpen(!searchOpen)}>
                <SearchOutlined />
              </IconWrapper>
            </MenuItem>
            <MenuItem>
              <IconWrapper onClick={() => navigate('/basket')}>
                <ShoppingCartWithBadge />
              </IconWrapper>
            </MenuItem>
          </MenuHorizontal>
        </Col>
      </Row>
      <Search open={searchOpen} setOpen={() => setSearchOpen()} />
    </Header>
  );
}

export default Menu;
