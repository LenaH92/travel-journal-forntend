import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Edit from "../components/Edit";

const TripDetailsPage = ({ trips, handleDelete }) => {
  const [tripsState, setTrips] = useState(trips);
  const [isEditing, setIsEditing] = useState(false); // State to control the visibility of the Edit form
  const { tripId } = useParams();

  const [trip, setTrip] = useState(null); // Initialize a separate state for the current trip

  // Fetch the trip data based on the tripId from the URL
  useEffect(() => {
    if (tripsState && tripId) {
      const foundTrip = tripsState.find(
        (currentTrip) => String(currentTrip.id) === tripId
      );
      setTrip(foundTrip); // Set the trip state to the found trip
    }
  }, [tripId, tripsState]);

  if (!tripsState) {
    return <div>Loading trips...</div>;
  }

  if (!trip) {
    return <div>Trip not found or still loading...</div>;
  }

  const handleUpdate = async (updatedTrip) => {
    if (!updatedTrip || !updatedTrip.id) {
      console.error("Trip ID is missing.");
      return;
    }

    try {
      // https://travel-journal-backend-t7fs.onrender.com/trips
      // const response = await fetch(`http://localhost:4000/trips/${updatedTrip.id}`, {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/trips/${updatedTrip.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTrip),
        }
      );
      const result = await response.json();
      if (response.ok) {
        // Update the trip in the state after successful update
        setTrips((prevTrips) =>
          prevTrips.map((t) => (t.id === updatedTrip.id ? updatedTrip : t))
        );
        setTrip(updatedTrip); // Update the trip state after successful update
        setIsEditing(false); // Close the edit form after successful update
      } else {
        console.error("Failed to update trip:", result);
      }
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  function handleDescription(description) {
    const formattedDescription = description
      .split("\n")
      .map((line, index) => <p key={index}>{line}</p>);
    return <div>{formattedDescription}</div>;
  }

  return (
    <div>
      <h1>delete</h1>
      <h1>{trip.title}</h1>
      <hr />
      <div>
        <h3>
          to {trip.destinations}{" "}
          {trip.duration ? `for ${trip.duration} days` : ""}{" "}
          {trip.startDate ? ` from ${trip.startDate}` : ""}{" "}
          {trip.endDate ? ` to ${trip.endDate}` : ""}
        </h3>
        <div className="imagesArrayDiv">
          {/* if no images display p, if yes map through them, slice and display all */}
          {trip.images.length === 0 ? (
            <p>No images available for this trip.</p>
          ) : (
            trip.images
              .slice(0, 2)
              .map((image, index) => (
                <img key={index} src={image} alt={`Trip image ${index + 1}`} />
              ))
          )}
        </div>
      </div>
      <hr />
      <section className="descriptionDiv">
        {handleDescription(trip.description)}
      </section>
      <button type="button" onClick={() => handleDelete(trip.id)}>
        Delete trip
      </button>

      {/* Show the Edit button only */}
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Edit Trip</button>
      )}

      {/* Show the Edit form only if isEditing is true */}
      {isEditing && <Edit trip={trip} handleUpdate={handleUpdate} />}
    </div>
  );
};

export default TripDetailsPage;
