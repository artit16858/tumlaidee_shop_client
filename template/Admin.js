import React from "react";

import { Layout } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';


import _Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

import routes from "../routes";

const { Content, Sider } = Layout;
const StyledLayout = styled(Layout)`
#components-layout-demo-top-side-2 .logo {
width: 120px;
height: 31px;
background: rgba(255, 255, 255, 0.2);
margin: 16px 28px 16px 0;
float: left;
}
`

function Admin(props) {
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (

    <StyledLayout>
      <Layout>
        <_Menu
          {...props}
          routes={routes}
        />
     
        <Layout style={{ padding: '0 24px 24px' }}>
        <Header />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>

    </StyledLayout>
  );
}

export default Admin;
