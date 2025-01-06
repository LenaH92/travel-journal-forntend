import React, { useEffect, useState } from "react";

const EditPage = () => {
  const [trips, setTrips] = useState([]); // fetched from backend
  const [selectedTrip, setSelectedTrip] = useState(null); // for editing, saves the selected trip
  const [formData, setFormData] = useState({}); // user input

  // Fetch trips from the API
  const fetchTrips = async () => {
    try {
      const response = await fetch("http://localhost:4000/trips");
      if (response.ok) {
        const tripsData = await response.json();
        setTrips(tripsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []); //[] means it will only run once


  const handleRowClick = (id) => {
    const trip = trips.find((t) => t.id === id); // searches for the trip with the given id
    setSelectedTrip(trip); // Set the selected trip
    setFormData(trip); // Pre-fill the form with the trip data
  };

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/trips/${selectedTrip.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send updated data
      });

      if (response.ok) {
        const updatedTrip = await response.json();

        // Update the trips state with the modified trip
        setTrips((prev) =>
          prev.map((trip) => (trip.id === updatedTrip.id ? updatedTrip : trip))
        );

        alert("Trip updated successfully!");
        setSelectedTrip(null); // Reset the selected trip
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update the trip.");
    }
  };

  return (
    <div>
      <h1>EditPage</h1>
      <p>Here you can edit all your trips.</p>

      {/* Table to display trips */}
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Destination</th>
            <th>Trip Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((currentTrip) => (
            <tr key={currentTrip.id} onClick={() => handleRowClick(currentTrip.id)} style={{ cursor: "pointer" }}>
              <td>{currentTrip.id}</td>
              <td>{currentTrip.title}</td>
              <td>{currentTrip.duration || "Not specified"}</td>
              <td>{currentTrip.destinations}</td>
              <td>{currentTrip.tripStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to edit selected trip */}
      {selectedTrip && (
        <div style={{ marginTop: "20px" }}>
          <h2>Edit Trip: {selectedTrip.title}</h2>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                value={formData.duration || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Destination:
              <input
                type="text"
                name="destinations"
                value={formData.destinations || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Trip Status:
              <input
                type="text"
                name="tripStatus"
                value={formData.tripStatus || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPage;
