import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const onSubmit =  () => {
    navigate("/login")
  }
  const onSubmit2 =  () => {
    navigate("/signup")
  }
  return (
    <div>
      {/* <header id="header" className="fixed-top" style={{backgroundColor: ''}}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/login">Hà Huy Vũ</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#products">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header> */}
      <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src="./src/assets/img/avata.jpg" alt="website logo" />
          </div>
          <div className="title_name">
            <a className="td_name">L.D.M</a>
          </div>
          <ul className="navbar__links">
            <li className="navbar__link">
              <a href="#about">About</a>
            </li>
            <li className="navbar__link">
              <a href="#products">Products</a>
            </li>
            <li className="navbar__link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <Space wrap>
    <Button type="primary" danger onClick={onSubmit} >Signin</Button>
    <Button  danger onClick={onSubmit2}> Signup</Button>
  </Space>
          <div className="navbar__icons">
            <div className="navbar__icon"></div>
          </div>
        </nav>
      </div>
    </header>
    </div>
  );
};
  
export default Header;
