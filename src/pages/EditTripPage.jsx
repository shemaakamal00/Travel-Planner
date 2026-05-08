import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripForm from "../components/TripForm";

function EditTripPage({ trips, updateTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripToEdit = trips.find((trip) => trip.id === Number(id));

  const [formData, setFormData] = useState({
    name: tripToEdit?.name || "",
    region: tripToEdit?.region || "",
    flag: tripToEdit?.flag || "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Destination name is required");
      return;
    }

    await updateTrip(id, formData);
    navigate("/trips");
  };

  return (
    <section>
      <h1>Edit {tripToEdit.name}</h1>

      <TripForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Save changes"
      />
    </section>
  );
}

export default EditTripPage;