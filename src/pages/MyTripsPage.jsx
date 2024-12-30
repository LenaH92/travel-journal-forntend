import { useEffect } from "react";
import { useState } from "react";

const MyTripsPage = () => {

    //usestate to load in the trips data
    const [trips, setTrips] = useState([])

    // Fetch the database with useefect async on mounting

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await fetch('http://localhost:4000/trips')
                console.log(response);
                if (response.ok) {
                    const tripsData = await response.json();
                    console.log(tripsData);
                    setTrips(tripsData);
                }
            } catch (error) {
                console.log(error)
            }
        }

        //call the function otherwise nothing happens
        fetchTrips();
    }, [])

    // filtering trips by the status
    const plannedTrips = trips.filter((trip) => trip.status === "planned");
    const completedTrips = trips.filter((trip) => trip.status === "completed");
    const cancelledTrips = trips.filter((trip) => trip.status === "cancelled");

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
                        {plannedTrips.map((trip) => (
                            <li key={trip.id}>
                                {trip.title} - {trip.duration} days
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="compleatedTripsDiv">
                    <h4>Compleated trips!</h4>
                    <p>Check your memories here!</p>
                    <ul className="compleatedTripsCardsDiv">
                        {/* listing the trips as li */}
                        {completedTrips.map((trip) => (
                            <li key={trip.id}>
                                {trip.title} - {trip.duration} days
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cancelledTripsDiv">
                    <h4>Cancelled trips!</h4>
                    <p>Let's keep them as an idea for the future</p>
                    <ul className="cancelledTripsCardsDiv">
                        {/* listing the trips as li */}
                        {cancelledTrips.map((trip) => (
                            <li key={trip.id}>
                                {trip.title} - {trip.duration} days
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>);
}

export default MyTripsPage;