import React from "react";
import myLogo from "../img/logoCoder.png";
import CartWidge from "./CartWidget/CartWidget";
import itemListContainer from "./itemListContainer/itemListContainer";

export default function NavBar() {
    return (
<div> 
    <nav className="navbar navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="#">
        <img src={myLogo} alt="coderHouse" width="50"/>
        </a>
        <a className="btn btn-primary" href="#" role="button">About</a>
        <button className="btn btn-primary" type="submit">Contact </button>   
        <input className="btn btn-primary" type="button" value="Cell phones"/>
        <input className="btn btn-primary" type="submit" value="Laptops"/>
        <input className="btn btn-primary" type="reset" value="Tablets"/>
        <div><CartWidge/></div>
    </div>
    </nav>   
    
    
 </div>

    );
}

