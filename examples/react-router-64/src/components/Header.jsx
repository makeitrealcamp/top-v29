import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/"> home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> about </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> contact </NavLink>
          </li>
          <li>
            <NavLink to="/blog"> blog </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
