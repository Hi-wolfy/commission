import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Image from "next/image";
import logo from "../public/img/logo.svg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="appnavbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Image src={logo} alt="logo" width={100} height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto p-3" navbar>
            <NavItem>
              <NavLink href="/introduction">Introduction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/solution">Solution</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ai">processing AI</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recruitment">Recruitment</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
