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
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} width="200" />

      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <button onClick={() => addTrip(country)}>
        Add to Travel List ✈️
      </button>
    </div>
  );
}

export default CountryDetailsPage;