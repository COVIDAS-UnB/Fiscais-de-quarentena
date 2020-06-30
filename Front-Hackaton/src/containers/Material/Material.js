import React from 'react';
import './Material.css';
import pdf from "../../assets/img/pdf.svg";
import share from "../../assets/img/share.svg";
import MaterialCard from "../../components/MaterialCard/MaterialCard";

const Material = (props) => {
    return(
        <div className="app-container">
            <h2>Material Didático</h2>
            <div className="app-block">
                <h3 className="app-block__title">Engenharia de Software</h3>
                <MaterialCard name="Ficha - ES 1/2020"/>
                <MaterialCard name="Ficha - FIS 1/2020"/>
                <MaterialCard name="Ficha - CIC 1/2020"/>
                <MaterialCard name="Ficha - ES 2/2020"/>
                <MaterialCard name="Ficha - FIS 2/2020"/>
                <MaterialCard name="Ficha - CIC 2/2020"/>
            </div>
            <div className="app-block">
                <h3 className="app-block__title">Circuitos Elétricos</h3>
                <MaterialCard name="Ficha - ES 1/2020"/>
                <MaterialCard name="Ficha - FIS 1/2020"/>
                <MaterialCard name="Ficha - CIC 1/2020"/>
                <MaterialCard name="Ficha - ES 2/2020"/>
                <MaterialCard name="Ficha - FIS 2/2020"/>
                <MaterialCard name="Ficha - CIC 2/2020"/>
            </div>
            <div className="app-block">
                <h3 className="app-block__title">Física</h3>
                <MaterialCard name="Ficha - ES 1/2020"/>
                <MaterialCard name="Ficha - FIS 1/2020"/>
                <MaterialCard name="Ficha - CIC 1/2020"/>
                <MaterialCard name="Ficha - ES 2/2020"/>
                <MaterialCard name="Ficha - FIS 2/2020"/>
                <MaterialCard name="Ficha - CIC 2/2020"/>
            </div>
        </div>
    )
}

export default Material;