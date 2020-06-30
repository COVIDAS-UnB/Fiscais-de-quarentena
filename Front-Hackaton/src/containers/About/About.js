import React, { Component } from "react";

class HomePage extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">

                <div class="info">
                    <h3 onClick={(e) => this.routeTo("")} class="info-text float-right">Início</h3>
                    <h3 onClick={(e) => this.routeTo("sign-in")} class="info-text float-right">Login</h3>
                    <h3 onClick={(e) => this.routeTo("sign-up")} class="info-text float-right">Cadastro</h3>
                    <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
                </div>

                <div class="main-area">

                    <h1 class="title-home-page title-color">Sobre</h1>
                    <h2 class="sub-title-home-page title-color">o</h2>
                    <h1 class="title-home-page title-color">Projeto</h1>
                    <div class="barra-azul"></div>

                    <div class="text-area-about">
                        <p>text texttext texttext texttext texttext texttext texttext texttext texttext texttext text</p>
                        <p>text texttext texttext texttext texttext texttext texttext texttext texttext texttext text</p>

                        <p>text texttext texttext texttext texttext texttext texttext texttext texttext texttext text</p>
                        <p>text texttext texttext texttext texttext texttext texttext texttext texttext texttext text</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;