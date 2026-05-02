import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTripPage({ trips, updateTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripToEdit = trips.find((trip) => trip.id === Number(id));

  const [formData, setFormData] = useState({
    status: tripToEdit?.status || "Want to go",
    budget: tripToEdit?.budget || "",
    notes: tripToEdit?.notes || "",
  });

  if (!tripToEdit) {
    return (
      <div>
        <h1>Trip not found</h1>
        <p>Go back to My Trips and choose a trip to edit.</p>
      </div>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.status.trim()) {
      alert("Status is required");
      return;
    }

    updateTrip(id, formData);
    navigate("/trips");
  };

  return (
    <section>
      <h1>Edit {tripToEdit.name}</h1>

      <form onSubmit={handleSubmit} className="trip-form">
        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Want to go">Want to go</option>
            <option value="Planning">Planning</option>
            <option value="Visited">Visited</option>
          </select>
        </label>

        <label>
          Budget
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Example: 15000"
          />
        </label>

        <label>
          Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Write your travel notes..."
          />
        </label>

        <button type="submit">Save changes</button>
      </form>
    </section>
  );
}

export default EditTripPage;