import { Link } from "react-router-dom";

const HomePage = () => {
    return (<>
        <h1>Welcome, User!</h1>
        <p>What do you want to do?</p>
        <div className="buttonsDiv">
            <p>What is this place?</p>
            <button type="button"><Link to='/instructions'> Click here for a overview!</Link></button>
            <p>I want to check my saved trips!</p>
            <button type="button"><Link to='/my-trips'>Go to My Trips</Link></button>
            <p>I have a new andd exciting trip!</p>
            <button type="button"><Link to='/trip/new'>Create a new trip</Link></button>
        </div>


    </>);
}

export default HomePage;