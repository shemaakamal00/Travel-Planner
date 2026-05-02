import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import EditTripPage from "./pages/EditTripPage";
import TripsPage from "./pages/TripsPage";

function App() {
  const [trips, setTrips] = useState([]);

  const addTrip = (country) => {
    const newTrip = {
      id: Date.now(),
      name: country.name.common,
      flag: country.flags.png,
      region: country.region,
    };

    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const deleteTrip = (id) => {
    setTrips((prevTrips) =>
      prevTrips.filter((trip) => trip.id !== id)
    );
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

          <Route path="/create" element={<CreateTripPage />} />
          <Route
            path="/edit/:id"
            element={<EditTripPage trips={trips} updateTrip={updateTrip} />}
          />
          <Route path="/trips" element={<TripsPage trips={trips} />} />
        </Routes>

      </main>
    </>
  );
}

export default App;