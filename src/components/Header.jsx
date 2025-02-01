import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const online = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.xRrzWLm-NnuaLrJShnaPsAHaHa?rs=1&pid=ImgDetMain"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {online ? "✅" : "❌" }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={ () => {
                        loginBtn === "Login" ? setLoginBtn("Logout") :
                        setLoginBtn("Login");}
                }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
    };

export default Header;