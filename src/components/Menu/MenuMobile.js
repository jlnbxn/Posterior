import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import HeaderLogo from '../../images/svg/logo.svg';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, navigate } from 'gatsby';
import { Col, Row, Form, Input, Button } from 'antd';
import styled from '@emotion/styled';
import { PosteriorContext } from '../../context/PosteriorContext';
import ShoppingCartWithBadge from './ShoppingCartWithBadge';

const Header = styled.header`
  position: relative;
  width: 100%;
  min-width: 320px;
  height: 50px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
  z-index: 220;
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

const Logo = styled.div`
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

  font-weight: 400;
  width: 100%;
  transition: none;

  padding: 0 3px;
  .anticon {
    font-size: 18px;
  }
`;

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
  /* margin-top: 7px; */
  z-index: 280;
`;

const SearchForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 40px auto;
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

function MenuMobile() {
  const {
    state: { cart },
    dispatch,
  } = useContext(PosteriorContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  let html;
  useEffect(() => {
    html = document.querySelector('html');
  }, []);

  const onFinish = (value) => {
    console.log('Success:', value);
    dispatch({ type: 'SET_SEARCH_FILTER', term: value.term });
    // dispatch({ type: 'FILTER_BY_TERM', term: value.term })
    setSearchOpen(false);
  };

  useEffect(() => {
    searchOpen || drawerOpen
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible');
  }, [searchOpen]);

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
          {drawerOpen ? (
            <Drawer>
              <DrawerHeader>
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
          ) : (
            <></>
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

      <SearchModal open={searchOpen}>
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
            <Form.Item
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
              `}
            >
              <Input placeholder="What Are You Looking For?" />
            </Form.Item>

            <Form.Item
              wrapperCol={{ span: 24 }}
              labelCol={{ span: 24 }}
              css={css`
                width: 100%;
              `}
            >
              <Button block size={'large'} htmlType="submit">
                Search the site
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Button
          type="default"
          onClick={() => setSearchOpen(false)}
          icon={<CloseOutlined />}
          css={css`
            position: absolute;
            top: 5px;
            right: 6px;
            padding: 0 5px;

            border: none;
            color: #343434;
            z-index: 281;
          `}
        />
      </SearchModal>
    </Header>
  );
}

export default MenuMobile;
