import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #fff;
  padding: 1rem;

  /* Add padding and flex-wrap for better spacing */
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }

  /* Add margin bottom for better spacing in mobile view */
  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
    /* Add background color and padding for better visibility */
    background-color: black;
    padding: 1rem;
    /* Position the mobile menu at the top */
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const SearchBox = styled.input`
  padding: 0.5rem;
  margin: 0 1rem;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  width: 40%;
  border-radius: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <img src={Logo} alt="" />
      <SearchBox type="text" placeholder="Search" />
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? "Close" : "Menu"}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/">Blockchain</a>
        </NavItem>
        <NavItem>
          <a href="/">Token</a>
        </NavItem>
        <NavItem>
          <a href="/">APIs</a>
        </NavItem>
        <NavItem>
          <a href="/">Ecosystem</a>
        </NavItem>
        <NavItem>
          <a href="/">TstMainnet</a>
        </NavItem>
        <NavItem>
          <a href="/">Sign in</a>
        </NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }}>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/">Blockchain</a>
        </NavItem>
        <NavItem>
          <a href="/">Token</a>
        </NavItem>
        <NavItem>
          <a href="/">APIs</a>
        </NavItem>
        <NavItem>
          <a href="/">Ecosystem</a>
        </NavItem>
        <NavItem>
          <a href="/">TstMainnet</a>
        </NavItem>
        <NavItem>
          <a href="/">Sign in</a>
        </NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;
