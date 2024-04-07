import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li style={{ padding: 0, margin: 0, textAlign: 'center' }}>
            <Link to="/" style={{ display: 'block', margin: 'auto' }}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
