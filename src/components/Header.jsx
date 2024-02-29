import React, { useState } from "react";
import foody from "../assets/images/foody.png";
import profile from "../assets/images/pexels-vinicius-wiesehofer-1130626.jpg";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeLink, setActiveLink] = useState("/home");

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <Navbar fluid rounded className="bg-black">
      <Navbar.Brand href="/home">
        <img src={foody} className="w-[125px]" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Delicious
        </span>
      </Navbar.Brand>
      {isLoggedIn && (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}

      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/home"
          active={activeLink === "/home"}
          onClick={() => handleNavLinkClick("/home")}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={activeLink === "/about"}
          onClick={() => handleNavLinkClick("/about")}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/menu"
          active={activeLink === "/menu"}
          onClick={() => handleNavLinkClick("/menu")}
        >
          Menu
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
