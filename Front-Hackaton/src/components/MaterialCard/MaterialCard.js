import pdf from "../../assets/img/pdf.svg";
import share from "../../assets/img/share.svg";
import React from "react";

const MaterialCard = (props) =>{
    let {name} = props;
    return (
        <div className="app-block__item">
            <img className="app-block__itemimg" src={pdf} alt="pdf icon" />
            <span>{name}</span>
            <img className="app-block__itemicon" src={share} alt="share icon" />
            <div className="app-block__itemsquaregrey"></div>
            <div className="app-block__itemsquaregreen"></div>
        </div>
    )
}
export default MaterialCard;