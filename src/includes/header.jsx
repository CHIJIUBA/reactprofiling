import { Consumer } from "../context/context";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header id="header" className="header d-flex align-items-center light-background sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

            <a className="logo d-flex align-items-center me-auto me-xl-0">
                <Consumer>
                {(value) => (<h1 className="sitename">{value.username}</h1>)}
                </Consumer>
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><Link to="/home" className="active">Home</Link></li>
                {/* <Link to="home" className="active">Home</Link> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><a>Services</a></li>
                <li><a>Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div className="header-social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

            </div>
        </header>
    );

}

export default Header;