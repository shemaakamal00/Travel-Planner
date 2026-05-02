import { Link } from "react-router-dom";

function TripsPage({ trips, deleteTrip }) {
  return (
    <section>
      <h1>My Travel List ✈️</h1>

      {trips.length === 0 ? (
        <p>No trips added yet. Go to Countries and add one!</p>
      ) : (
        <div className="trip-grid">
          {trips.map((trip) => (
            <article className="trip-card" key={trip.id}>
              <img src={trip.flag} alt={trip.name} />

              <div className="trip-card-content">
                <h3>{trip.name}</h3>
                <p>{trip.region}</p>

                <p>Status: {trip.status || "Want to go"}</p>
                {trip.budget && <p>Budget: {trip.budget} kr</p>}
                {trip.notes && <p>Notes: {trip.notes}</p>}

                <div className="trip-actions">
                  <Link to={`/edit/${trip.id}`} className="edit-btn">
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteTrip(trip.id)}
                    className="delete-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TripsPage;