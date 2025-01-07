import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <h4>Check out our repos!</h4>
            <Link to="https://github.com/LenaH92/travel-journal-forntend"><p>Forntend Repo</p></Link >
            <p>and</p>
            <Link to="https://github.com/LenaH92/travel-journal-forntend"><p>Backend Repo</p></Link >
        </div>
    )

}

export default Footer;
