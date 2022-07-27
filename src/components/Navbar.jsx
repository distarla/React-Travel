import React from "react";
import travelData from "../data/travelData";
import { Link } from 'react-router-dom'

const Navbar = props => {

    const liCountries = travelData.map( (el,index) => {
        return (
            <li className="nav-item" key={index}>
                <Link className="nav-link" to={el.link}>{el.country}</Link>
            </li>
        );
    })

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>TRAVEL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        { liCountries }
                    </ul>

                </div>
            </div>
        </nav>
    );

}

export default Navbar