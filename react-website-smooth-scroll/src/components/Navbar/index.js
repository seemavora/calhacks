import React from 'react';
//import Logo  from '../components/images/emotions.png';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
const Navbar = () => {
  return (
    <>
     <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                Facial Expression
            </NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="explore">Explore Insights</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="trend">Trends</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/upload">Upload Video</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
     </Nav>
    </>
  );
}

export default Navbar