import styled from "styled-components";
import { colors } from "../../styles/global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${colors.lightpurpure};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

  @media (max-width: 600px) {
    width: 50vw;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${colors.pearl};
  text-decoration: none;

  :hover {
    color: ${colors.yellowmellow};
  }
`;
