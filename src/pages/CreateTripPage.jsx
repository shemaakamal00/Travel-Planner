import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Destination name is required");
      return;
    }

    await addManualTrip(formData);
    navigate("/trips");
  };

  return (
    <section>
      <h1>Create Trip</h1>
      <p>Add your own destination to the travel list.</p>

      <TripForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create trip"
      />
    </section>
  );
}

export default CreateTripPage;