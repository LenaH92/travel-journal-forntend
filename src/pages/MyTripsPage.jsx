import CancelleddTripsList from "../components/CancelledTripsList";
import CompleatedTripsList from "../components/CompleatedTripsList";
import PlannedTripsList from "../components/PlannedTripsList";

const MyTripsPage = () => {
    return (
        <>
            <p>May be we want a serach bar here? </p>
            <h1>My trips page</h1>
            <div className="allTripsDiv">
                <div className="plannedTripsDiv">
                    <h4>Planned trips!</h4>
                    <p>Better get them done before it's too late!</p>
                    <div className="plannedTripsCardsDiv">
                        <PlannedTripsList />
                    </div>
                </div>
                <div className="compleatedTripsDiv">
                    <h4>Compleated trips!</h4>
                    <p>Check your memories here!</p>
                    <div className="compleatedTripsCardsDiv">
                        <CompleatedTripsList />
                    </div>
                </div>
                <div className="cancelledTripsDiv">
                    <h4>Cancelled trips!</h4>
                    <p>Let's keep them as an idea for the future</p>
                    <div className="cancelledTripsCardsDiv">
                        <CancelleddTripsList />
                    </div>
                </div>
            </div>

        </>);
}

export default MyTripsPage;