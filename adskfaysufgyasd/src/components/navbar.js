import { Link } from "react-router-dom";

export default function NavBar(){

    return(

        <div className="nav-bar">
            <Link to="/profile">Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/dating">Search the Haystack</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Log In</Link>
        </div>

    )
    
}