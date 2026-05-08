const STORAGE_KEY = "trips";

export const getAll = async () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    throw new Error("Failed to fetch trips");
  }
};

export const getById = async (id) => {
  try {
    const trips = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return trips.find((trip) => trip.id === Number(id));
  } catch (error) {
    throw new Error("Failed to fetch trip");
  }
};

export const create = async (data) => {
  try {
    const trips = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const newTrip = {
      id: Date.now(),
      ...data,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...trips, newTrip]));

    return newTrip;
  } catch (error) {
    throw new Error("Failed to create trip");
  }
};

export const update = async (id, data) => {
  try {
    const trips = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const updatedTrips = trips.map((trip) =>
      trip.id === Number(id) ? { ...trip, ...data } : trip
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTrips));

    return updatedTrips;
  } catch (error) {
    throw new Error("Failed to update trip");
  }
};

export const remove = async (id) => {
  try {
    const trips = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const updatedTrips = trips.filter((trip) => trip.id !== Number(id));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTrips));

    return updatedTrips;
  } catch (error) {
    throw new Error("Failed to delete trip");
  }
};