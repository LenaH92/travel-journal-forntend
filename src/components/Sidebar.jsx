import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="sidebar">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <hr />
      <NavLink to="/instructions">
        <li>How to use the website</li>
      </NavLink>
      <hr />
      <NavLink to="/my-trips">
        <li>My trips</li>
      </NavLink>
      <hr />
      <NavLink to="/trip/new">
        <li>Add new trip!</li>
      </NavLink>
      <hr />
      <NavLink to="/edit">
        <li>Edit your trips</li>
      </NavLink>
      <hr />
      <NavLink to="/about-us">
        <li>About us</li>
      </NavLink>
      <hr />
    </ul>
  );
}

export default Sidebar;
