import { Link } from "react-router-dom";
import BellsIcon from "../Icons/BellsIcon";
import LogoIcon from "../Icons/LogoIcon";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <LogoIcon
          width={40}
          height={40}
        ></LogoIcon>
        <h2 className="logo-name">Airtrav</h2>
      </div>
      <div className="navbar-midle">
        <Link
          to="/"
          className="navbar-link"
        >
          Thing To Do
        </Link>
        <Link
          to="/"
          className="navbar-link"
        >
          Tour
        </Link>
        <Link
          to="/"
          className="navbar-link"
        >
          Blog
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-text">
          <span className="navbar-text">USD</span>
          <span className="navbar-text">FAQ</span>
          <BellsIcon></BellsIcon>
        </div>
        <div className="navbar-avatar">
          <img
            src="https://images.unsplash.com/photo-1611608822650-925c227ef4d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
