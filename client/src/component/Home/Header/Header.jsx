import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='Navigation_bar'>
        <div style={{ cursor: 'pointer' }}>
          <h1>SF</h1>
        </div>
        <div className='search'>
          <form className='search_input'>
            <input type="text" placeholder="Search Product" />
            <button className='search_icon'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div className='auth_container'>
          <div className='account'>
            <div className="icon_account">
              <i class="fa-regular fa-user"></i>
            </div>
          </div>
          <div className='account'>
            <Link to={"/wishlist"}>
              <div className="icon_account">
                <p>
                <i class="fa-regular fa-heart"></i>
                </p>
              </div>
            </Link>
          </div>
          <div className='account'>
            <Link to={"/cart"}>
              <div className="icon_account">
                <p>
                <i class="fa-solid fa-cart-shopping"></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;