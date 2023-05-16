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
            <NavLink to="/create"> create </NavLink>
          </li>
          <li>
            <NavLink to="/edit"> edit </NavLink>
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
