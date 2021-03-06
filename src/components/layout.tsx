import React from "react"
import { Normalize } from "styled-normalize"
import styled from "styled-components"

import LassieStyles from '@lassiebug/styles';
import Header from "@lassiebug/header";
import { Link } from "gatsby";
import Logo from "./logo";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:var(--background);
  color:var(--foreground);
  font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
  a {
      text-decoration:none;
      color:var(--blue);
      font-weight: bold;
  }

  p {
      margin-bottom: var(--padding-05);
  }
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  position: relative;
  padding:var(--padding-05);
  box-sizing:border-box;
`

const Layout = ({ children }: LayoutProps) => (
    <AppContainer>
        <Normalize />
        <Header title="Erik Badger">
            <Link to="/">
                <Header.Item><p>Home</p></Header.Item>
            </Link>
            <Link to="/about">
                <Header.Item><p>About</p></Header.Item>
            </Link>
            <Link to="/projects">
                <Header.Item><p>Projects</p></Header.Item>
            </Link>
        </Header>
        <Main>{children}</Main>
        <LassieStyles/>
    </AppContainer>
)

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
