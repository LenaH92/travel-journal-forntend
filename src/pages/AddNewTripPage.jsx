import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";



const AddNewTripPage = ({ trips, setTrips, fetchTrips }) => {

    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [destinations, setDestinations] = useState("");
    const [images, setImages] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [tripStatus, setTripStatus] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(event) {
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

        //This is to send it to the database

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/trips`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTrip)
            })

            if (response.ok) {
                const data = await response.json()
                await fetchTrips()
            }

        } catch (error) {
            console.log(error)
        }

        setTitle("")
        setDuration("")
        setDescription("")
        setDestinations("")
        setImages([])
        setStartDate("")
        setEndDate("")
        setTripStatus("")

        navigate('/my-trips')

    }

    // Handleing input or url, so whether , or next line, I dont understand very well how this wors but it does 
    const [inputText, setInputText] = useState(''); // for the text input 

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputText(value);

        // processing what the user writes
        const newImages = value
            .split(/\s*,\s*|\s*\n\s*/).map(url => url.trim())
            .filter(url => url.length > 0); // filter empty url
        setImages(newImages);
    };


    return (<div id="newTripPage">
        <h2>Add your new trip here!</h2>
        <p>Star planning a new trip here or add one that already happened!</p>
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Trip title:

            </label>
            <input
                required
                type="text"
                value={title}
                placeholder="Write here the title of the trip"
                onChange={(event) => setTitle(event.target.value)} />

            <label>
                Trip duration:
                <input

                    type="text"
                    value={duration}
                    placeholder="Write here the duration of the trip in days"
                    onChange={(event) => setDuration(event.target.value)} />
            </label>

            <label>
                Trip Start Date:
                <input

                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)} />
            </label>

            <label>
                Trip End Date:
                <input

                    type="date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)} />
            </label>

            <label>
                Trip destination:

            </label>
            <input
                required
                type="text"
                value={destinations}
                placeholder="Write here the destination of the trip"
                onChange={(event) => setDestinations(event.target.value)} />

            <label> Trip description: </label>
            <textarea
                required
                rows="4"
                cols="50"
                value={description}
                placeholder="Write here the description of the trip"
                onChange={(event) => setDescription(event.target.value)}
            />


            <label>
                Trip images:

            </label>
            <textarea
                required
                rows="4"
                cols="50"
                value={inputText} // Mostramos el texto tal cual el usuario lo escribe
                placeholder="Write here the URLs for the images of the trip, separating them with a coma (,) or new lines"
                onChange={handleInputChange} />


            <label>
                Trip status:
                <select required value={tripStatus} onChange={event => {
                    console.log(event);
                    setTripStatus(event.target.value)
                }}>
                    <option value="">-- Select --</option>
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