import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">AAA</Link>
          </li>
          <li>
            <Link to="/cc">CC</Link>
          </li>
          <li>
            <Link to="/dd">DD</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;