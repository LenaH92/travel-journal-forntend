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


    return (
        <>
            <p>May be we want a serach bar here? </p>
            <h1>My trips page</h1>
            <div className="allTripsDiv">
                <div className="plannedTripsDiv">
                    <h4>Planned trips!</h4>
                    <p>Better get them done before it's too late!</p>
                    <div className="plannedTripsCardsDiv">

                    </div>
                </div>
                <div className="compleatedTripsDiv">
                    <h4>Compleated trips!</h4>
                    <p>Check your memories here!</p>
                    <div className="compleatedTripsCardsDiv">

                    </div>
                </div>
                <div className="cancelledTripsDiv">
                    <h4>Cancelled trips!</h4>
                    <p>Let's keep them as an idea for the future</p>
                    <div className="cancelledTripsCardsDiv">

                    </div>
                </div>
            </div>

        </>);
}

export default MyTripsPage;