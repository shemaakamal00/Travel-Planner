import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";

function CreateTripPage({ addManualTrip }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    region: "",
    flag: "",
    status: "Vill besöka",
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
      alert("Vänligen ange ett destinationsnamn.");
      return;
    }

    await addManualTrip(formData);
    navigate("/trips");
  };

  return (
    <section>
      <h1>Skapa Resa</h1>
      <p>Lägg till din egen destination till reslistan.</p>

      <TripForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Skapa resa"
      />
    </section>
  );
}

export default CreateTripPage;