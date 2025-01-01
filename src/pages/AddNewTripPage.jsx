import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const AddNewTripPage = ({ trips, setTrips }) => {

    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [destinations, setDestinations] = useState("");
    const [images, setImages] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [tripStatus, setTripStatus] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newTrip = {
            id: uuidv4(),
            title,
            duration,
            description,
            destinations,
            images,
            startDate,
            endDate,
            tripStatus
        }

        addNewTrip(newTrip);

        setTitle("")
        setDuration("")
        setDescription("")
        setDestinations("")
        setImages([])
        setStartDate("")
        setEndDate("")
        setTripStatus("")

    }

    function addNewTrip(trip) {
        setTrips([trip, ...trips])
    }

    return (<div id="newTripPage">
        <h2>Add your new trip here!</h2>
        <p>Star planning a new trip here or add one that already happened!</p>
        <form onSubmit={handleSubmit}>
            <label>
                Trip title:
                <input
                    required
                    type="text"
                    value={title}
                    placeholder="Write here the title of the trip"
                    onChange={(event) => setTitle(event.target.value)} />
            </label>

            <label>
                Trip duration:
                <input
                    required
                    type="text"
                    value={duration}
                    placeholder="Write here the duration of the trip in days"
                    onChange={(event) => setDuration(event.target.value)} />
            </label>

            <label>
                Trip description:
                <input
                    required
                    type="text"
                    value={description}
                    placeholder="Write here the description of the trip"
                    onChange={(event) => setDescription(event.target.value)} />
            </label>

            <label>
                Trip destination:
                <input
                    required
                    type="text"
                    value={destinations}
                    placeholder="Write here the destination of the trip"
                    onChange={(event) => setDestinations(event.target.value)} />
            </label>

            <label>
                Trip images:
                <input
                    required
                    type="text"
                    value={images}
                    placeholder="Write here the url for the images of the trip"
                    onChange={(event) => setImages(event.target.value)} />
            </label>

            <label>
                Trip Start Date:
                <input
                    required
                    type="text"
                    value={startDate}
                    placeholder="Write here the starting date of the trip with this format DD/MM/YYYY"
                    onChange={(event) => setStartDate(event.target.value)} />
            </label>

            <label>
                Trip End Date:
                <input
                    required
                    type="text"
                    value={endDate}
                    placeholder="Write here the ending date of the trip with this format DD/MM/YYYY"
                    onChange={(event) => setEndDate(event.target.value)} />
            </label>

            <label>
                Trip status:
                <select required value={tripStatus} onChange={event => setTitle(event.target.value)}>
                    <option value="planned">Planned</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </label>

            <button type="submit"> Click to add this trip!</button>
        </form>

    </div>);
}

export default AddNewTripPage;