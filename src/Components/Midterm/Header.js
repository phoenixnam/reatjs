
import Admin from './Admin';
import { Routes,Route} from "react-router-dom";
import React from 'react';
import "./style/header.css";

// Các thành phần React và mã khác ở đây


class Header extends React.Component {
  render() {
    return (
        <div className='header'>
            <img className='img' src="../../../../../../img/image(1941).png"></img>
            <div className='menu'>
              <ul >
                <li>
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                    <a href="/Cart">GIỎ HÀNG</a>
                </li>
                <li>
                  <a href="/Admin">ADMIN</a>
                </li>
              </ul>
            </div>
            <div className='login'>
                <button className='button'>Đăng nhập</button>
            </div>
        </div>
        
    );
  }
}

export default Header;