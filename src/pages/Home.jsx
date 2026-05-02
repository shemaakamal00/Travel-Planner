import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <h1>Plan your next adventure 🌍</h1>
        <p>
          Explore countries, add destinations to your travel list and keep track
          of your plans, budget and notes.
        </p>

        <div className="hero-actions">
          <Link to="/countries" className="primary-btn">
            Explore Countries
          </Link>

          <Link to="/trips" className="secondary-btn">
            View My Trips
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;