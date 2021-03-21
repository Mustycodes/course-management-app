import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ children }: { children: JSX.Element }) => (
  <li>{children}</li>
);
// const NavLink = ({children}) => <a>{children}</a>;

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/courses">Courses</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
