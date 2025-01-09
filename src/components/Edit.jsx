import React, { useState, useEffect } from "react";

const Edit = ({ trip, handleUpdate }) => {
  const [formData, setFormData] = useState({});
  const [inputText, setInputText] = useState(''); // for the text input
  const [tripStatus, setTripStatus] = useState(''); // for the trip status

  useEffect(() => {
    if (trip) {
      setFormData({
        id: trip.id, // Ensure the trip id is included in form data
        title: trip.title,
        duration: trip.duration,
        destinations: trip.destinations,
        description: trip.description,
        images: trip.images || [], // Ensure images is in the form data 
        startDate: trip.startDate,
        endDate: trip.endDate,
        tripStatus: trip.tripStatus || "", // Ensure tripStatus is in the form data
      });
      setTripStatus(trip.tripStatus || ""); // Set initial tripStatus value
    }
  }, [trip]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData); // Call the parent handleUpdate with formData
  };
  // old code 

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);

    // Processing what the user writes
    const newImages = value
      .split(/\s*,\s*|\s*\n\s*/).map((url) => url.trim())
      .filter((url) => url.length > 0); // Filter empty URLs
    setFormData((prevData) => ({
      ...prevData,
      images: newImages, // Save the processed images in formData
    }));
  };

//new code



  return (
    <div>
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Destinations:
          <input
            type="text"
            name="destinations"
            value={formData.destinations || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Trip Status:
          <select
            required
            value={tripStatus || ""}
            onChange={(event) => {
              setTripStatus(event.target.value);
              setFormData((prevData) => ({
                ...prevData,
                tripStatus: event.target.value, // Ensure tripStatus is updated in formData
              }));
            }}
          >
            <option value="">-- Select --</option>
            <option value="planned">Planned</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>

        <label>Trip Images:</label>

        <textarea
  required
  rows="4"
  cols="50"
  value={formData.images ? formData.images.join("\n") : ""} //  newline character to display each URL on a new line
  placeholder="Write here the URLs for the images of the trip, separating them with a comma (,) or new lines"
  onChange={handleInputChange}
/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;
