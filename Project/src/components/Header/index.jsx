import React from 'react'
import './index.scss'
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <header id='headerId'>
        <div className="container">
          <p>Welcome to Juan online store</p>

<div>
  <select name="" id="selectId">
  <option value="">$Dollar(US)</option>
  <option value="">$Usd</option>
  <option value=""># Euro</option>
</select>

<select name="" id="selectLg">
  <option value="">English</option>
  <option value="">French</option>
</select>
</div>

        </div>
      </header>

<section id='juan'>
<div className="container">

<div className="divh1">
  <h1 style={{color:'orange'}}>ju</h1>
  <h1>an</h1>
</div>
<nav>
  <ul>
    <select name="" id="homeId">
      <option value="">Home</option>
      <option value="">Home version 01</option>
      <option value="">Home version 02</option>
    </select>
    <select name="" id="pageId">
      <option value="">Pages</option>
      <option value="">Page version 01</option>
      <option value="">Page version 02</option>
    </select>
    <select name="" id="shopId">
      <option value="">Shop</option>
      <option value="">Shop version 01</option>
      <option value="">Shop version 02</option>
    </select>
  </ul>
</nav>
<div className="social">
<FaSearch />
<IoSettingsOutline />
<FaBagShopping />
</div>

</div>
</section>

    </div>
  )
}

export default Header