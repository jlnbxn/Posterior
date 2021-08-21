import styled from '@emotion/styled';
import {} from 'antd';
import { Collapse, Col, Row, Form, Input, Button } from 'antd';
import React from 'react';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import MediaQuery from 'react-responsive';

const { Panel } = Collapse;

const Root = styled.footer`
  background-color: #f4f2f1;
`;
const Inner = styled.div`
  padding: 35px 20px;
  @media only screen and (min-width: 600px) {
    padding: 50px 25px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .anticon {
    font-size: 30px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.85);
  }
`;

const heading = css`
  position: relative;
  display: block;
  width: 100%;
  font-weight: 400;
  font-family: Roboto, Arial, Helvetica, clean, sans-serif;
  color: inherit;
`;

const headingThree = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
const headingFour = css`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FooterSection = styled.div`
  margin: 20px 0;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const footerMenu = css`
  li span {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 150%;
    text-transform: none;
    display: inline-block;
    padding: 5px 0;
  }
`;

const FooterSocial = styled.div`
  max-width: 180px;
  margin: 0 auto;
  text-align: center;
`;

const FooterPartners = styled.div`
  margin-top: 20px;
  max-width: 180px;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  text-align: center;

  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 40px;
  }
`;

const FormWrapper = styled.div`
  .ant-form-item {
    min-height: auto;
    margin: 15px 0;
    display: flex;

    @media only screen and (min-width: 600px) {
      flex-grow: 1;
      &:last-of-type {
        flex-grow: unset;
        width: 20.83333333%;
        margin-left: 45px;
      }
    }
    margin: 15px 0;
    display: flex;
  }
  .ant-form-item-control {
    width: 66.66666667%;
    flex: 1 1 auto;
  }
  .ant-input {
    height: 46px;
    line-height: 46px;
    font-size: 18px;
    color: #343434;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #343434;
    box-shadow: none;
    font-weight: 300;
    font-family: Roboto, Arial, Helvetica, clean, sans-serif;
    letter-spacing: 0.5px;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;

      opacity: 1; /* Firefox */
    }
  }

  .ant-select {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #343434;
    box-shadow: none;
    font-weight: 300;
    font-family: Roboto, Arial, Helvetica, clean, sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
  .ant-btn {
    padding-left: 5px;
    padding-right: 5px;

    height: 46px;
    font-size: 16px;
    font-weight: 400;
    padding: 2px 35px;

    display: block;
    width: 100%;

    text-transform: uppercase;

    color: #222;
    border-color: #222;
    background: transparent;

    transition: none;
    border-width: 2px;
    border-style: solid;
    text-align: center;
    min-width: 0;
    box-shadow: none;
  }

  .ant-form {
    @media only screen and (min-width: 600px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const FormBottom = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 150%;
  text-transform: none;
`;

const Accordion = styled(Collapse)`
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 20px;
  border: none;
  background: transparent;
  .ant-collapse-header {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 20px !important;
    padding-right: 20px !important;
    font-weight: 300;
    @media only screen and (min-width: 600px) {
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }
  .ant-collapse-content {
    border: none;
  }
  .ant-collapse-item {
    border: none;
  }
  .ant-collapse-content-box {
    padding: 10px 20px 10px 30px;
    ul li span {
      display: block;
      line-height: 46px;
      font-size: 14px;
      font-weight: 300;
    }
  }
  @media only screen and (min-width: 600px) {
    margin-left: -25px;
    margin-right: -25px;
  }
`;

function Footer() {
  return (
    <Root>
      <Inner>
        <h2 css={[heading, headingThree]}>Be in the know</h2>
        <FooterSection>
          <FormWrapper>
            <Form layout="horizontal" requiredMark="optional">
              <Form.Item css={css``}>
                <Input type="email" placeholder="Email Address *" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <FormBottom>
              By giving us your email address you agree to receive (thrilling)
              email updates, including special offers, new pieces and arty news.
              If you want you can unsubscribe at any time.
            </FormBottom>
          </FormWrapper>
        </FooterSection>
        <Row justify="space-between" align="top">
          <Col
            xs={24}
            lg={18}
            css={css`
              @media only screen and (max-width: 1023px) {
                margin-bottom: 20px;
              }
            `}
          >
            <MediaQuery minWidth={768}>
              <FooterDesktop />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <FooterAccordion />
            </MediaQuery>
          </Col>
          <Col xs={24} lg={5}>
            <FooterSocial>
              <h3
                css={[
                  heading,
                  headingFour,
                  css`
                    margin-bottom: 15px;
                    font-weight: 400;
                    @media only screen and (max-width: 1023px) {
                      text-align: center;
                    }
                  `,
                ]}
              >
                CONNECT WITH
              </h3>
              <Row justify="space-between" align="top">
                <a>
                  <TwitterOutlined />
                </a>
                <a>
                  <InstagramOutlined />
                </a>
                <a>
                  <FacebookFilled />
                </a>
              </Row>
            </FooterSocial>
            <FooterPartners>
              <span>0% FINANCE</span>
            </FooterPartners>
          </Col>
        </Row>
      </Inner>
    </Root>
  );
}

export default Footer;

const FooterDesktop = () => {
  return (
    <Row justify="space-between" align="top">
      <Col xs={24} md={8}>
        <h3
          css={
            (headingFour,
            css`
              margin-bottom: 15px;
              font-weight: 400;
            `)
          }
        >
          LEARN MORE
        </h3>
        <ul css={footerMenu}>
          <li>
            <span>Customer Support</span>
          </li>
          <li>
            <span>Customer Reviews</span>
          </li>
          <li>
            <span>Worldwide Shipping</span>
          </li>
          <li>
            <span>Legal</span>
          </li>
        </ul>
      </Col>
      <Col xs={24} md={8}>
        <h3
          css={
            (headingFour,
            css`
              margin-bottom: 15px;
              font-weight: 400;
            `)
          }
        >
          FOR ARTISTS
        </h3>
        <ul css={footerMenu}>
          <li>
            <span>About Us</span>
          </li>
          <li>
            <span>Submit Your Art</span>
          </li>
          <li>
            <span>Posterior Prize</span>
          </li>
          <li>
            <span>Seller Support</span>
          </li>
        </ul>
      </Col>
      <Col xs={24} md={8}>
        <h3
          css={
            (headingFour,
            css`
              margin-bottom: 15px;
              font-weight: 400;
            `)
          }
        >
          ABOUT US
        </h3>
        <ul css={footerMenu}>
          <li>
            <span>Meet The Team</span>
          </li>
          <li>
            <span>Our Art Insiders</span>
          </li>
          <li>
            <span>Recent Press</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

const FooterAccordion = () => {
  return (
    <Accordion accordion={true}>
      <Panel header="LEARN MORE" showArrow={false}>
        <ul css={footerMenu}>
          <li>
            <span>Customer Support</span>
          </li>
          <li>
            <span>Customer Reviews</span>
          </li>
          <li>
            <span>Worldwide Shipping</span>
          </li>
          <li>
            <span>Legal</span>
          </li>
        </ul>
      </Panel>
      <Panel header="FOR ARTISTS" showArrow={false}>
        <ul css={footerMenu}>
          <li>
            <span>Customer Support</span>
          </li>
          <li>
            <span>Customer Reviews</span>
          </li>
          <li>
            <span>Worldwide Shipping</span>
          </li>
          <li>
            <span>Legal</span>
          </li>
        </ul>
      </Panel>
      <Panel header="ABOUT US" showArrow={false}>
        <ul css={footerMenu}>
          <li>
            <span>Customer Support</span>
          </li>
          <li>
            <span>Customer Reviews</span>
          </li>
          <li>
            <span>Worldwide Shipping</span>
          </li>
          <li>
            <span>Legal</span>
          </li>
        </ul>
      </Panel>
    </Accordion>
  );
};
