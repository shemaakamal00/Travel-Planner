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
      "Are you sure you want to delete this trip?"
    );

    if (confirmDelete) {
      deleteTrip(id);
    }
  };

  return (
    <>
      <h1 className="page-title">My trips</h1>

      <div className="trip-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a trip..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All statuses</option>
          <option value="Want to go">Want to go</option>
          <option value="Planned">Planned</option>
          <option value="Booked">Booked</option>
          <option value="Completed">Completed</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {filteredTrips.length === 0 ? (
        <p className="empty-message">No trips found 🧳</p>
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
                    Edit
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(trip.id)}
                  >
                    Delete
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