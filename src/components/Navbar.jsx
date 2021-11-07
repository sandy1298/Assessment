import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
   
    return (
       <>
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bgcyan">
                {/* <NavLink className="navbar-brand font-weight-bold text-color" to="/details">HOME</NavLink> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-2">
                            <NavLink  className="nav-link text-color" to="/">Login</NavLink>
                        </li>
                        {/* <li className="nav-item px-2">
                            <NavLink  className="nav-link text-color" to="/details">Details</NavLink>
                        </li> */}
                        <li className="nav-item px-2">
                            <NavLink  className="nav-link text-color" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       </>
    )
}


