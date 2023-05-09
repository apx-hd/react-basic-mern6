import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-item">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="logo" width="50px" />
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/counter" className="navbar-item">
                    Counter
                </Link>
                <Link to="/todo" className="navbar-item">
                    Todo
                </Link>
            </div>
        </div>
    )
}

export default Navbar