import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTripPage({ addManualTrip }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    region: "",
    flag: "",
    status: "Want to go",
    budget: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Destination name is required");
      return;
    }

    addManualTrip(formData);
    navigate("/trips");
  };

  return (
    <section>
      <h1>Create Trip</h1>
      <p>Add your own destination to the travel list.</p>

      <form onSubmit={handleSubmit} className="trip-form">
        <label>
          Destination
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Example: Tokyo"
          />
        </label>

        <label>
          Region
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Example: Asia"
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            placeholder="Paste an image URL"
          />
        </label>

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

        <button type="submit">Create trip</button>
      </form>
    </section>
  );
}

export default CreateTripPage;