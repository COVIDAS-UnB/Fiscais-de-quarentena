import React, { Component } from "react";
import classes from './MenuSuperior.css';
import unb_logo from "../../assets/img/unb_logo.svg";

class MenuSuperior extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div className="barraSuperior">
                <div className="conteudoBarraSuperior">
                    <img onClick={(e) => this.props.routeTo("")} className="logoUnbBarra" alt="error" src={unb_logo} />
                </div>
            </div>
        );
    }
}

export default MenuSuperior;