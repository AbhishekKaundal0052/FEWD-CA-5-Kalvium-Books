import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Kalvium-Logo-SVG.svg";
import icon from "../assets/search.png"
import { useState } from "react";
import Book from "./Book";

export default function NavBar({setSearchedValue}) {
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (e) => {
    if(e.key==='Enter')
    setSearchedValue(searchValue);
  else
  setSearchedValue(searchValue);
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const PageChange = () => {
    setSearchValue("");
    setSearchedValue(searchValue);
  }
  return (
    <>
      <nav>
        <div className="home">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" onClick={PageChange} />
          </Link>
        </div>
        <div className="Input">
          <input type="text" placeholder="Search..."  value={searchValue} onChange={handleChange} />
          <button className='searchBtn' onClick={handleClick}><img className="search" src={icon}/></button>
        </div>
        <Link to="/Form">
          <button className="register" >Register</button>
        </Link>
      </nav>
    </>
  );
}



