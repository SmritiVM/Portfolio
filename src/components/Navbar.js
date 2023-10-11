import {React} from "react";
import { Link } from "react-router-dom";

import cobalt from '../assets/Cobalt.png';
function Navbar(){
    return(
        <nav class = "navbar">
            <Link to = "/" class = "navbar-brand">
                <img src = {cobalt} style={{width: "40px", borderRadius: "20px"}}/>
            </Link>
            <div class = "nav">
                <Link to = "/" class = "nav-link"><i class = "fa fa-home"></i> Home</Link>
                <Link to = "/about" class = "nav-link"><i class = "fa fa-user"></i> About</Link>
                <Link to = "/projects" class = "nav-link"><i class = "fa fa-laptop"></i> Projects</Link>
            </div>
        </nav>
    )
}
export default Navbar;