import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, NavbarList, NavbarListItem, NavbarDivButton } from './Styles/Navbar.style.js'


//var windowFeatures = "height=972,width=660, modal=yes, alwaysRaised=yes";
const Navbar = () => {

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarListItem>
          <Link id='link' to='/'>Home</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link id='link' to='/inspiration'>Inspiration</Link></NavbarListItem>
        <NavbarListItem>
          <Link id='link' to='/contact'>Contact Me</Link>
        </NavbarListItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;