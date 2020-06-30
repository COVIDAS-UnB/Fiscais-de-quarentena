import React, { Component } from "react";
import classes from './PaginaInicial.css';
import imagem_inicial from "../../assets/img/imagem-pagina-inicial.png";

class PaginaInicial extends Component {

    render() {
        return (
            <div className="full-page">

                <div className="conteudo-paginal-inicial">
                    <div className="div-img div-card">
                        <img className="imagem-inicial-pessoas" alt="imagem-inicial-pessoas" src={imagem_inicial} />
                    </div>

                    <div className="div-card">
                        <div className="homepage-title">
                            <h1>Adote um Aluno</h1>
                            <div></div>
                        </div>
                        <div className="div-homepage-text">
                            <h3 className="homepage-text">Mais do que nunca, precisamos de uma comunidade forte. Precisamos do SEU apoio para sairmos dessa.</h3>
                        </div>
                        <div className="div-card-buttons">
                            <div className="button-homepage" onClick={(e) => this.props.routeTo("cadastro")} >
                                <h1 className="text-button-homepage">Quero ajudar</h1>
                                <div></div>
                            </div>
                            <div className="button-homepage margin-left" onClick={(e) => this.props.routeTo("cadastro")} >
                                <h1 className="text-button-homepage">Preciso de ajuda</h1>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PaginaInicial;