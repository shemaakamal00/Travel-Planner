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
  const [visibleCount, setVisibleCount] = useState(24);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (err) {
        console.log(err);
        setError("oops, något gick fel. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setVisibleCount(24);
  }, [searchTerm, regionFilter]);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter === "All" || country.region === regionFilter;

    return matchesSearch && matchesRegion;
  });

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  if (loading) return <Loading text="Laddar länder..." />;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Utforska Länder</h1>
      <p>Välj ett land och börja planera din nästa resa.</p>

      <div className="trip-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Sök efter ett land..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="All">Alla regioner</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <p className="empty-message">Inga länder hittades 🌍</p>
      ) : (
        <>
          <p className="country-count">
            Visar {visibleCountries.length} av {filteredCountries.length} länder
          </p>

          <CountryList countries={visibleCountries} />

          {visibleCount < filteredCountries.length && (
            <div className="load-more-wrapper">
              <button
                className="primary-btn"
                onClick={() => setVisibleCount((prev) => prev + 24)}
              >
                Ladda fler länder
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default CountriesPage;
