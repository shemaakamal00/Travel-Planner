import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../api/countriesApi";

function CountryDetailsPage({ addTrip }) {
  const { name } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountryByName(name);
        setCountry(data);
      } catch (err) {
        console.log(err);
        setError("Could not load country");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="country-details">
      <h1>{country.name.common}</h1>

      <img
        className="country-flag"
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
      />

      <div className="country-info">
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>

      <button className="add-btn" onClick={() => addTrip(country)}>
        Add to Travel List ✈️
      </button>
    </div>
  );
}

export default CountryDetailsPage;