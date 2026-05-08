import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <h1>Planera ditt nästa äventyr 🌍</h1>
        <p>
          Utforska länder, lägg till destinationer till din reslista och håll koll
          på dina planer, budget och anteckningar.
        </p>

        <div className="hero-actions">
          <Link to="/countries" className="primary-btn">
            Utforska Länder
          </Link>

          <Link to="/trips" className="secondary-btn">
            Mina Resor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;