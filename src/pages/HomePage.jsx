import { Link } from "react-router-dom";

const HomePage = () => {
    return (<>
        <h1>This is the hompage</h1>
        <h2>Welcome, User!</h2>
        <p>what do you want to do?</p>
        <button type="button"><Link to='/instructions'> What is this place?</Link></button>
        <button type="button"><Link to='/my-trips'>Go to My Trips</Link></button>
        <button type="button"><Link to='/trip/new'>Create a new trip</Link></button>

    </>);
}

export default HomePage;