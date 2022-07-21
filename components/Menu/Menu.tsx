import React, { useState, useRef } from "react";

import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import { useOnClickOutside } from "../../utils/hooks";
import Navbar from "../Navbar";
import NavbarComp from "../Navbar";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        {/* <StyledLink onClick={() => close()}>Link 1</StyledLink>
        <StyledLink onClick={() => close()}>Link 2</StyledLink>
        <StyledLink onClick={() => close()}>Link 3</StyledLink> */}
        <NavbarComp />
      </StyledMenu>

      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
