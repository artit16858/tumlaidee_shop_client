import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import Menu from "./Menu";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "100vw",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div` 
`; 

class Page extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Menu />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      );
    }
  }

  export default Page;
