import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
    return (<>
        <h3><Link to={`/trip/${trip.id}`}>{trip.title}</Link> </h3>

        - to {trip.destinations} {trip.duration ? `for ${trip.duration} days` : ""}
        {/* making the duration appear or not in case it is left blank */}
        <button className="detailsBTN"><Link to={`/trip/${trip.id}`}>See more</Link></button>
        <br />
        {/* first check if the img exists in the database, change the img styling in css later and delete it from here */}
        {trip.images[0] && (
            <Link to={`/trip/${trip.id}`}>
                <img
                    src={trip.images[0]}
                    alt={`Image of ${trip.title}`}
                    style={{ width: "200px", height: "auto" }}
                />
            </Link>
        )}
    </>);
}

export default TripCard;