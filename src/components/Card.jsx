import React from "react";
import { useParams } from 'react-router-dom'

import travelData from "../data/travelData";

const Card = props => {

    const { country } = useParams();

    if (country) {

        const pais = travelData.filter(el => el.link == country);

        if (pais.length > 0) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{pais[0].titulo}</h5>
                        <p className="card-text">{pais[0].info}</p>
                    </div>
                    <img src={"images/" + pais[0].imagem} className="card-img-bottom" alt="..." />
                </div>
            )
        } else {
            return (
                <p>País não encontrado!!</p>
            );
        }

    } else {
        return (
            <p>Home</p>
        );
    }
}

export default Card;