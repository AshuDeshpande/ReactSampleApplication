import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <Link to={"/"} className="navbar-brand">Sample React Application</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/counter"}>Counter</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;