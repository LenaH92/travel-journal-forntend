import React from "react";
import { useState } from "react";

const EditPage = () => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      const response = await fetch("http://localhost:4000/trips");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>EditPage</h1>
      <p>Here you can edit all your trips.</p>
    </div>
  );
};

export default EditPage;
