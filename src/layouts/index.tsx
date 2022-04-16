import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
const Layout: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>layout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/xxx">Nothing Here</Link>
          </li>
          <li onClick={() => navigate('/about')}>click to about</li>
          <li onClick={() => navigate(-1)}>click to about</li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
