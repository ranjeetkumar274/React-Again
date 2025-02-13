import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import FoodSoodLogo from "../utils/FoodSood.png";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const online = useOnlineStatus();

    return(
        <div className="flex justify-between bg-red-200 shadow-md">
            <div className="logo-container">
                <img className="w-32 ml-20"src={FoodSoodLogo} ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 space-x-10">
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