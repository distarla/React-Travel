import React from "react";
import Card from "../components/Card";
import { Routes, Route } from 'react-router-dom'


const Content = props => {
    return (
        <Routes>
            <Route path="/:country" element={<Card />} />
            <Route path="/" element={<Card />} />
        </Routes>
    );
}

export default Content;