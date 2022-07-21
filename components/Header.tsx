import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

import Menu from "../components/Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fdf2e9;
    font-family: 'Annie Use Your Telescope', cursive;
  }
`;

const LogInLinks = styled.section`
  a {
    // height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;

    &.active,
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <header>
      <GlobalStyle />
      <Menu />
      <div>
        {user ? (
          <LogInLinks>
            <div>
              <Link href="#">{user.email}</Link>
            </div>
            <div
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              <Link href="/login">{"LogOut"}</Link>
            </div>
          </LogInLinks>
        ) : (
          <LogInLinks>
            <Link href="/signup" passHref>
              {"Signup"}
            </Link>
            <Link href="/login" passHref>
              {"Login"}
            </Link>
          </LogInLinks>
        )}
      </div>
    </header>
  );
}

export default Header;
