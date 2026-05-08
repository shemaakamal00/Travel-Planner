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
    status: tripToEdit?.status || "Vill besöka",
    budget: tripToEdit?.budget || "",
    notes: tripToEdit?.notes || "",
  });

  if (!tripToEdit) {
    return (
      <div>
        <h1>Resan kunde inte hittas</h1>
        <p>Gå tillbaka till Mina resor och välj en resa att redigera.</p>
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
      alert("Vänligen ange ett destinationsnamn.");
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
        buttonText="Spara ändringar"
      />
    </section>
  );
}

export default EditTripPage;