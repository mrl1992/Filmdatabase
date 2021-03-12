import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink className="styleNavlink" to="/">
        Home
      </NavLink>
      <NavLink className="styleNavlink" to="/movies">
        Browse Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
