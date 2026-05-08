import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countriesApi";
import CountryList from "../components/CountryList";
import Loading from "../components/Loading";

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

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

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter === "All" || country.region === regionFilter;

    return matchesSearch && matchesRegion;
  });

  if (loading) return <Loading text="Loading countries..." />;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Explore Countries</h1>
      <p>Choose a country and start planning your next trip.</p>

      <div className="trip-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="All">All regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <p className="empty-message">No countries found 🌍</p>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </section>
  );
}

export default CountriesPage;