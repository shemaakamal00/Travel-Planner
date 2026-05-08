import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import EditTripPage from "./pages/EditTripPage";
import TripsPage from "./pages/TripsPage";
import { getAll, create, update, remove } from "./api/tripsApi";

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const data = await getAll();
        setTrips(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTrips();
  }, []);

  const addTrip = async (country) => {
    const alreadyExists = trips.some(
      (trip) => trip.name === country.name.common
    );

    if (alreadyExists) {
      alert("This country is already in your travel list");
      return;
    }

    const newTrip = {
      name: country.name.common,
      flag: country.flags.png,
      region: country.region,
      status: "Want to go",
      budget: "",
      notes: "",
    };

    const createdTrip = await create(newTrip);
    setTrips((prevTrips) => [...prevTrips, createdTrip]);
  };

  const addManualTrip = async (tripData) => {
    const newTrip = {
      ...tripData,
      flag:
        tripData.flag ||
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    };

    const createdTrip = await create(newTrip);
    setTrips((prevTrips) => [...prevTrips, createdTrip]);
  };

  const deleteTrip = async (id) => {
    const updatedTrips = await remove(id);
    setTrips(updatedTrips);
  };

  const updateTrip = async (id, updatedTrip) => {
    const updatedTrips = await update(id, updatedTrip);
    setTrips(updatedTrips);
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