import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Edit from "../components/Edit";

const TripDetailsPage = ({ trips, handleDelete }) => {
  const [tripsState, setTrips] = useState(trips);
  const [isEditing, setIsEditing] = useState(false);
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null); // Moved here to main component

  // Fetch the trip data based on the tripId from the URL
  useEffect(() => {
    if (tripsState && tripId) {
      const foundTrip = tripsState.find(
        (currentTrip) => String(currentTrip.id) === tripId
      );
      setTrip(foundTrip);
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
        setTrips((prevTrips) =>
          prevTrips.map((t) => (t.id === updatedTrip.id ? updatedTrip : t))
        );
        setTrip(updatedTrip);
        setIsEditing(false);
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

  // Handle the image click to expand
  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  // Handle modal close
  const closeModal = () => {
    setExpandedImage(null);
  };

  return (
    <div>
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
              .slice()
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Trip image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  style={{ width: "100px", cursor: "pointer", margin: "10px" }}
                />
              ))
          )}
          {expandedImage && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content">
                <img src={expandedImage} alt="Expanded view" />
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
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
