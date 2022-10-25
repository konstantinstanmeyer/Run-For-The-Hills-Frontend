import { Link } from "react-router-dom";

export default function NavBar(){

    return(

        <div className="nav-bar">
            <Link to="/profile">Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/browsing">Search the Haystack</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login">Log In</Link>
        </div>

    )
    
}