import React from "react";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements";
import SearchBar from "./SearchBar";
import { NavBtnLink } from "./NavbarElements";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { SearchContainer } from "./NavbarElements";
const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/deals">Deals</NavLink>
        <NavLink to="/whatsnew">What's New</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <SearchContainer>
        <SearchBar />
        <NavBtnLink to="/profile">
          <PersonOutlineOutlinedIcon /> <p>Account</p>
        </NavBtnLink>
        <NavBtnLink to="/cart">
          <AddShoppingCartOutlinedIcon /> <p>Cart</p>
        </NavBtnLink>
      </SearchContainer>
    </Nav>
  );
};

export default Navbar;
