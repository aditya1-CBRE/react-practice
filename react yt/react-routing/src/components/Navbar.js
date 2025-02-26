import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underlined",
  };
};



const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
