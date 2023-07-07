import React from 'react';

function Header() {
  return (
    <>
    <div className="navbar-vertical navbar">
      <div data-simplebar="init" style={{ maxHeight: '100vh' }} className="">
        <div className="simplebar-wrapper" style={{ margin: '0px' }}>
         
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
             
                <div className="simplebar-content" style={{ padding: '0px' }}>
                  
                  <ul className="navbar-nav flex-column accordion">
                    <div className="nav-item">
                      <a className="nav-link active" href="/">
                        <i className="nav-icon fe fe-home me-2"></i>Dashboard
                      </a>
                    </div>
                    <div className="nav-item">
                      <div className="navbar-heading">LAYOUTS &amp; PAGES</div>
                    </div>
                   
                      
                    <li className="nav-item collapse">
                      <ul className="nav flex-column list-group">
                        <li className="nav-item">
                          <a className="nav-link" href="/pages/profile">
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/pages/settings">
                            Settings
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/404">
                            404 Error
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#navDashboard"
                        aria-expanded="false"
                        aria-controls="navDashboard"
                        href="/#"
                      >
                        <i className="nav-icon fe fe-lock me-2"></i>Authentication
                      </a>
                    </li>
                    <li className="nav-item collapse">
                      <ul className="nav flex-column list-group">
                        <li className="nav-item">
                          <a className="nav-link" href="/authentication/sign-in">
                            Sign In
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/authentication/sign-up">
                            Sign Up
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/authentication/forget-password">
                            Forget Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <div className="nav-item">
                      <a className="nav-link" href="/layouts/layout-vertical">
                        <i className="nav-icon fe fe-layout me-2"></i>Layouts
                      </a>
                    </div>
                    <div className="nav-item">
                      <div className="navbar-heading">UI COMPONENTS</div>
                    </div>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#navDashboard"
                        aria-expanded="false"
                        aria-controls="navDashboard"
                        href="/#"
                      >
                        <i className="nav-icon fe fe-monitor me-2"></i>Components
                      </a>
                    </li>
                    <li className="nav-item collapse">
                      <ul className="nav flex-column list-group">
                        <li className="nav-item">
                          <a className="nav-link" href="/components/accordions">
                            Accordions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/components/alerts">
                            Alerts
                          </a>
                        </li>
                        {/* Other components... */}
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#navDashboard"
                        aria-expanded="false"
                        aria-controls="navDashboard"
                        href="/#"
                      >
                        <i className="nav-icon fe fe-corner-left-down me-2"></i>Menu Level
                      </a>
                    </li>
                    <li className="nav-item collapse">
                      <ul className="nav flex-column list-group">
                        <li className="nav-item">
                          <div className="navbar-nav flex-column accordion">
                            <a
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#navDashboard"
                              aria-expanded="false"
                              aria-controls="navDashboard"
                              href="/#"
                            >
                              Two Level
                            </a>
                            <div className="nav-item collapse">
                              <ul className="nav flex-column list-group">
                                <li className="nav-item">
                                  <a className="nav-link" href="/#">
                                    NavItem 1
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/#">
                                    NavItem 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="navbar-nav flex-column accordion">
                            <a
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#navDashboard"
                              aria-expanded="false"
                              aria-controls="navDashboard"
                              href="/#"
                            >
                              Three Level
                            </a>
                            <div className="nav-item collapse">
                              <ul className="nav flex-column list-group">
                                <li className="nav-item">
                                  <div className="navbar-nav flex-column accordion">
                                    <a
                                      className="nav-link"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#navDashboard"
                                      aria-expanded="false"
                                      aria-controls="navDashboard"
                                      href="/#"
                                    >
                                      NavItem 1
                                    </a>
                                    <div className="nav-item collapse">
                                      <ul className="nav flex-column list-group">
                                        <li className="nav-item">
                                          <a className="nav-link" href="/#">
                                            NavChildItem 1
                                          </a>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="/#">
                                            NavChildItem 2
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/#">
                                    NavItem 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="simplebar-placeholder" style={{ width: '249px', height: '607px' }}></div>
        </div>
        <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
          <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
        </div>
        <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
          <div className="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div>
        </div>
      </div>
    
</>
);
}

export default Header;
