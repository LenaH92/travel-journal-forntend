import { useParams } from "react-router-dom";

const TripDetailsPage = ({ trips }) => {

    const { tripId } = useParams();

    const trip = trips.find((currentTrip) => String(currentTrip.id) === tripId);
    /* useParams(): Retrieves the tripId from the URL.
    String(currentTrip.id): Converts currentTrip.id (number or UUID) to a string for comparison.
    find(): Searches for the trip in the trips array where the id matches tripId. */

    return (<div>
        <h1>{trips.tite}</h1>
    </div>);
}

export default TripDetailsPage;