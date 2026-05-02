# Travel Planner App

---

## Project Description

This is a React-based CRUD application where users can explore countries and create their own personal travel list.

The app fetches data from the REST Countries API and allows users to manage their own trips using full CRUD functionality.

Users can:

* Browse countries
* View detailed information about a country
* Add countries to their personal travel list
* Update travel details (notes, budget, status)
* Remove trips from the list

---

## Features

* Fetch data from external API (Axios)
* Create new trips
* Read and display countries & trips
* Update trip details
* Delete trips
* Dynamic routing with React Router
* Responsive UI (optional if you add styling)
* Error handling and loading states

---

## Technologies Used

* React
* Vite
* Axios
* React Router DOM
* JavaScript (ES6+)
* CSS

---

## API Used

This project uses:

REST Countries API
https://restcountries.com/

---

## Project Structure

src/
├── api/
│   ├── axiosConfig.js
│   └── countriesApi.js
├── components/
│   ├── Nav.jsx
│   ├── CountryList.jsx
│   ├── CountryCard.jsx
│   ├── TripForm.jsx
│   └── Loading.jsx
├── pages/
│   ├── Home.jsx
│   ├── CountriesPage.jsx
│   ├── CountryDetailsPage.jsx
│   ├── CreateTripPage.jsx
│   └── EditTripPage.jsx
├── App.jsx
└── main.jsx

---

## Summary

This project demonstrates:

* Working with APIs using Axios
* Implementing CRUD functionality
* Using React Router for navigation
* Managing state with React hooks

---

Built as part of a school assignment in Fullstack Development.
