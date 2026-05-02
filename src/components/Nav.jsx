import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h2>Travel Planner</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Countries</NavLink>
        <NavLink to="/create">Create trip</NavLink>
        <NavLink to="/trips">My Trips</NavLink>
      </div>
    </nav>
  );
}

export default Nav;