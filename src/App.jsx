import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import EditTripPage from "./pages/EditTripPage";
import TripsPage from "./pages/TripsPage";

function App() {
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");
    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const addTrip = (country) => {
    const alreadyExists = trips.some(
      (trip) => trip.name === country.name.common
    );

    if (alreadyExists) {
      alert("This country is already in your travel list");
      return;
    }

    const newTrip = {
      id: Date.now(),
      name: country.name.common,
      flag: country.flags.png,
      region: country.region,
      status: "Want to go",
      budget: "",
      notes: "",
    };

    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const addManualTrip = (tripData) => {
    const newTrip = {
      id: Date.now(),
      flag:
        tripData.flag ||
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      ...tripData,
    };

    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const deleteTrip = (id) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
  };

  const updateTrip = (id, updatedTrip) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === Number(id) ? { ...trip, ...updatedTrip } : trip
      )
    );
  };

  return (
    <>
      <Nav />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesPage />} />

          <Route
            path="/countries/:name"
            element={<CountryDetailsPage addTrip={addTrip} />}
          />

          <Route
            path="/create"
            element={<CreateTripPage addManualTrip={addManualTrip} />}
          />

          <Route
            path="/edit/:id"
            element={<EditTripPage trips={trips} updateTrip={updateTrip} />}
          />

          <Route
            path="/trips"
            element={<TripsPage trips={trips} deleteTrip={deleteTrip} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;