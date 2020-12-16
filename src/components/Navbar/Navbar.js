import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <HamburgerIcon onClick={handleClick}>
            {click ? <FaBars /> : <FaTimes />}
          </HamburgerIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
