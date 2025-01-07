import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="sidebar">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/instructions">
        <li>How to use the website</li>
      </NavLink>
      <NavLink to="/my-trips">
        <li>My trips</li>
      </NavLink>
      <NavLink to="/trip/new">
        <li>Add new trip!</li>
      </NavLink>
      <NavLink to="/edit">
        <li>Edit your trips</li>
      </NavLink>
      <NavLink to="/about-us">
        <li>About us</li>
      </NavLink>
    </ul>
  );
}

export default Sidebar;
