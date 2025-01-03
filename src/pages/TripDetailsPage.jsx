import { useParams } from "react-router-dom";

const TripDetailsPage = ({ trips, handleDelete }) => {

    const { tripId } = useParams();

    const trip = trips.find((currentTrip) => String(currentTrip.id) === tripId);
    /* useParams(): Retrieves the tripId from the URL.
    String(currentTrip.id): Converts currentTrip.id (number or UUID) to a string for comparison.
    find(): Searches for the trip in the trips array where the id matches tripId. */

    return (<div>
        <h1>{trip.title}</h1>
        <hr />
        <div>
            <h3>to {trip.destinations} {trip.duration ? `for ${trip.duration} days` : ""} {trip.startDate ? ` from ${trip.startDate}` : ""} {trip.endDate ? ` to ${trip.endDate}` : ""} </h3>
            <h1>ADD HERE THE PICTURES IN CaRROUSEL MODE</h1>
        </div>
        <hr />
        <p>{trip.description}</p>
        <button type="button">Edit trip</button>
        <button
            type="button"
            onClick={() => handleDelete(trip.id)}>
            Delete trip
        </button>
    </div>);
}

export default TripDetailsPage;