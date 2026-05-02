import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/countries/${country.name.common}`} className="country-card">
      <img src={country.flags.png} alt={country.flags.alt || country.name.common} />

      <div className="country-card-content">
        <h3>{country.name.common}</h3>
        <p>{country.region}</p>
      </div>
    </Link>
  );
}

export default CountryCard;