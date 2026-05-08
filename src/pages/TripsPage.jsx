import { useState } from "react";
import { Link } from "react-router-dom";

function TripsPage({ trips, deleteTrip }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredTrips = trips
    .filter((trip) =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((trip) =>
      statusFilter === "All" ? true : trip.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "oldest") {
        return a.id - b.id;
      }

      return b.id - a.id;
    });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Är du säker på att du vill ta bort denna resa? Detta kan inte ångras."
    );

    if (confirmDelete) {
      deleteTrip(id);
    }
  };

  return (
    <>
      <h1 className="page-title">Mina resor</h1>

      <div className="trip-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Sök efter en resa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">Alla statusar</option>
          <option value="Vill besöka">Vill besöka</option>
          <option value="Planerar att besöka">Planerar att besöka</option>
          <option value="Bokad resa">Bokad resa</option>
          <option value="Besökt">Besökt</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Nyast först</option>
          <option value="oldest">Äldst först</option>
          <option value="name">Namn A-Ö</option>
        </select>
      </div>

      {filteredTrips.length === 0 ? (
        <p className="empty-message">Inga resor hittades 🧳</p>
      ) : (
        <div className="trip-grid">
          {filteredTrips.map((trip) => (
            <article className="trip-card" key={trip.id}>
              <img src={trip.flag} alt={trip.name} />

              <div className="trip-card-content">
                <h3>{trip.name}</h3>
                <p>{trip.region}</p>
                <p>{trip.status}</p>
                <p>{trip.budget}</p>
                <p>{trip.notes}</p>

                <div className="trip-actions">
                  <Link className="edit-btn" to={`/edit/${trip.id}`}>
                    Redigera
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(trip.id)}
                  >
                    Ta bort
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default TripsPage;