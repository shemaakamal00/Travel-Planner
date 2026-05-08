import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h2>Travel Planner</h2>

      <div>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/countries">Länder</NavLink>
        <NavLink to="/create">Skapa resa</NavLink>
        <NavLink to="/trips">Mina Resor</NavLink>
      </div>
    </nav>
  );
}

export default Nav;