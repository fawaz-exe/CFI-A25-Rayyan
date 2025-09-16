import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
      <nav className="navbar bg-dark">
        <h1
          style={h1Styles}
        >
          Github
        </h1>

        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link>
          </li>
          <li><Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></li>
          <li><Link to='/about' style={{textDecoration:"none", color:"white"}}>About Us</Link></li>
        </ul>
      </nav>
    </>
  );
}

const h1Styles = {
    color: "white",
    marginLeft: "10px",
  }


export default Navbar;