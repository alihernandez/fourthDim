import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, } from 'reactstrap';
  import MatButt from '@material-ui/core/Button';
import './NavBar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="navi">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="navbar-brand mx-auto" id="navTit">The Fourth Dimension</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mens">Rags for the dudes.</NavLink>
            </NavItem>
            <NavItem>

            <UncontrolledDropdown className="ml-end" nav inNavbar>
              <DropdownToggle nav caret>
                Mens
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <MatButt href="/mens-tops" color="primary">
        Men's Tops
      </MatButt>
                </DropdownItem>
                <DropdownItem>
                <MatButt href="/mens-bots" color="primary">
        Men's Bottoms
      </MatButt>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavLink href="/womens">Fashion for the ladies!</NavLink>

            <UncontrolledDropdown className="ml-end" nav inNavbar>
              <DropdownToggle nav caret>
                Womens
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <MatButt href="/womens-tops" color="primary">
        Women's Tops
      </MatButt>
                </DropdownItem>
                <DropdownItem>
                <MatButt href="/womens-bots" color="primary">
        Women's Bottoms
      </MatButt>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


              
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Accessories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign-up">Sign Up</NavLink>
            </NavItem>
            
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;