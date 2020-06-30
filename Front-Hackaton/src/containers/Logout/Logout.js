import React, { Component } from "react";
import loading from '../../assets/gif/loading-circle.svg';
import Cookies from "js-cookie";
import classes from './Logout.css';
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";

class Logout extends Component {

    componentDidMount = () => {
        Cookies.remove('tk');

        setTimeout(function () {
            window.location.reload()
        }, 1500);
    }

    render() {
        return (
            <div class="div-page-lout-loading">
                <MenuSuperior></MenuSuperior>
                <img class="image-loading" alt="loading" src={loading}></img>
            </div>
        );
    }
}

export default Logout;