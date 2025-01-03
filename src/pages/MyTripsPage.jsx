
import TripCard from "../components/TripCard";

const MyTripsPage = ({ trips, handleDelete }) => {

    // filtering trips by the status

    const plannedTrips = trips.filter((trip) => trip.tripStatus === "planned");
    const completedTrips = trips.filter((trip) => trip.tripStatus === "completed");
    const cancelledTrips = trips.filter((trip) => trip.tripStatus === "cancelled");


    return (
        <>
            <p>May be we want a serach bar here? </p>
            <h1>My trips page</h1>
            <div className="allTripsDiv">
                <div className="plannedTripsDiv">
                    <h4>Planned trips!</h4>
                    <p>Better get them done before it's too late!</p>
                    <ul className="plannedTripsCardsDiv">
                        {/* listing the trips as li */}
                        {plannedTrips.map((currentTrip) => (
                            <li key={currentTrip.id}>
                                <TripCard
                                    trip={currentTrip} handleDelete={handleDelete} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="compleatedTripsDiv">
                    <h4>Compleated trips!</h4>
                    <p>Check your memories here!</p>
                    <ul className="compleatedTripsCardsDiv">
                        {/* listing the trips as li */}
                        {completedTrips.map((currentTrip) => (
                            <li key={currentTrip.id}>
                                <TripCard
                                    trip={currentTrip} handleDelete={handleDelete} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cancelledTripsDiv">
                    <h4>Cancelled trips!</h4>
                    <p>Let's keep them as an idea for the future</p>
                    <ul className="cancelledTripsCardsDiv">
                        {/* listing the trips as li */}
                        {cancelledTrips.map((currentTrip) => (
                            <li key={currentTrip.id}>
                                <TripCard
                                    trip={currentTrip} handleDelete={handleDelete} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>);
}

export default MyTripsPage;