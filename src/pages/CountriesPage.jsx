import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countriesApi";
import CountryList from "../components/CountryList";

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (err) {
        console.log(err);
        setError("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Explore Countries</h1>
      <p>Choose a country and start planning your next trip.</p>

      <CountryList countries={countries} />
    </section>
  );
}

export default CountriesPage;