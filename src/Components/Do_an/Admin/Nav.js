import React from 'react';
import './Css.css'

const Navbar = () => {
  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="collapse navbar-collapse show" id="navbar-mobile">
              {/* Left side of the navbar */}
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-block d-md-none">
                  <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                    <i className="ft-menu"></i>
                  </a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link nav-link-expand" href="#">
                    <i className="ficon ft-maximize"></i>
                  </a>
                </li>
                <li className="nav-item dropdown navbar-search">
                  <a className="nav-link dropdown-toggle hide" data-toggle="dropdown" href="#">
                    <i className="ficon ft-search"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="arrow_box">
                      <form>
                        <div className="input-group search-box">
                          <div className="position-relative has-icon-right full-width">
                            <input className="form-control" id="search" type="text" placeholder="Search here..." />
                            <div className="form-control-position navbar-search-close">
                              <i className="ft-x"></i>
                            </div>
                          </div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
              
              {/* Right side of the navbar */}
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-language nav-item">
                  <a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="flag-icon flag-icon-us"></i>
                    <span className="selected-language"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown-flag">
                    <div className="arrow_box">
                      <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-us"></i> English</a>
                      <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn"></i> Chinese</a>
                      <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-ru"></i> Russian</a>
                      <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr"></i> French</a>
                      <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-es"></i> Spanish</a>
                    </div>
                  </div>
                </li>
              </ul>
              
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-notification nav-item">
                  <a className="nav-link nav-link-label" href="#" data-toggle="dropdown">
                    <i className="ficon ft-mail"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="arrow_box_right">
                      <a className="dropdown-item" href="#"><i className="ft-book"></i> Read Mail</a>
                      <a className="dropdown-item" href="#"><i className="ft-bookmark"></i> Read Later</a>
                      <a className="dropdown-item" href="#"><i className="ft-check-square"></i> Mark all Read</a>
                    </div>
                  </div>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                    <span className="avatar avatar-online">
                      <img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" />
                      <i></i>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="arrow_box_right">
                      <a className="dropdown-item" href="#">
                        <span className="avatar avatar-online">
                          <img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" />
                          <span className="user-name text-bold-700 ml-1">John Doe</span>
                        </span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"><i className="ft-user"></i> Edit Profile</a>
                      <a className="dropdown-item" href="#"><i className="ft-mail"></i> My Inbox</a>
                      <a className="dropdown-item" href="#"><i className="ft-check-square"></i> Task</a>
                      <a className="dropdown-item" href="#"><i className="ft-message-square"></i> Chats</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"><i className="ft-power"></i> Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
