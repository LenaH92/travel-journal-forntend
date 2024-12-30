const TripCard = ({ trip }) => {
    return (<>{trip.title} - to {trip.destinations} {trip.duration ? `for ${trip.duration} days` : ""}
        {/* making the duration appear or not in case it is left blank */}
        <br />
        {/* first check if the img exists in the database, change the img styling in css later and delete it from here */}
        {trip.images[0] && (
            <img
                src={trip.images[0]}
                alt={`Image of ${trip.title}`}
                style={{ width: "200px", height: "auto" }}
            />
        )}</>);
}

export default TripCard;