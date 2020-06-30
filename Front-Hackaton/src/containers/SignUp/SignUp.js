import React, { Component } from "react";
import classes from './SignUp.css';
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import imagem_inicial from "../../assets/img/imagem-pagina-inicial.png";
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import loading from '../../assets/gif/loading-circle.svg';
import Cookies from "js-cookie";
import axios from "../../axios";
import InputMask from 'react-input-mask';

class SignUp extends Component {
    state = {
        loadingSignUp: false,
        sucessSignUp: false,
        checkedAluno: false,
        selectedDate: "",
        formnumber: "",
        form: {
            email: '',
            password: '',
            name: '',
            birthday: '',
            phone: '',
        },
        rules: {
            email: [
                { required: true, message: "Por favor, digite seu email", trigger: 'change' }
            ],
            password: [
                { required: true, message: "Por favor, digite sua senha", trigger: 'change' },
            ],
        }
    };


    TextMaskCustom(props) {
        const { inputRef, ...other } = props;

        return (
            <InputMask
                ref={(ref) => {
                    inputRef(ref ? ref.inputElement : null);
                }}
                maskChar=""
                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                type="text"
                name='card'
                showMask

            />
        );
    }

    changeElement = (event, source) => {
        this.setState({
            form: Object.assign({}, this.state.form, { [source]: event.target.value })
        });
    }


    componentDidMount = () => {
        this.setState({ selectedDate: new Date('2014-08-18T21:11:54') });
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    };

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    handleChange = (event) => {
        this.setState({ checkedAluno: event.target.checked });
    };

    handleDateChange = (event) => {

    }

    onChangePhone = (event) => {
        this.setState({
            form: Object.assign({}, this.state.form, { ['phone']: event.target.value })
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loadingSignUp: true });

        let obj = {
            'name': this.state.form.name,
            'email': this.state.form.email,
            'password': this.state.form.password,
            'phone': this.state.form.phone,
            'birthdate': this.state.form.birthday,
        }

        axios.SignUp(obj)
            .then((response) => {
                const expirationDate = new Date(new Date().getTime() + 1111110 * 1000);
                let token = "tokentestedeautenticacao";
                Cookies.set('tk', token, {
                    expires: expirationDate,
                    secure: (window.location.protocol === 'https:')
                });
                this.setState({ sucessSignIn: true, loadingSignIn: false });

                window.location.reload();
            })
            .catch((error) => {
                this.setState({ sucessSignIn: false, loadingSignUp: false });
                console.log(error);
            });



        // setTimeout(function () {

        //     const expirationDate = new Date(new Date().getTime() + 1111110 * 1000);
        //     let token = "tokentesteblabla";
        //     Cookies.set('tk', token, {
        //         expires: expirationDate,
        //         secure: (window.location.protocol === 'https:')
        //     });

        //     window.location.reload();
        // }, 1500);
    }

    render() {
        return (

            <div class="div-home-page full-page">

                <MenuSuperior routeTo={this.routeTo}></MenuSuperior>


                {this.state.loadingSignUp ? (<img class="image-loading loading-sing-up" alt="loading" src={loading}></img>) : (null)}


                <div className={this.state.loadingSignUp ? ("conteudo-paginal-inicial opacity") : ("conteudo-paginal-inicial")}>

                    <div className="div-card first-card div-card-top">
                        <div>
                            <h1>Cadastro</h1>
                        </div>
                        <div className="div-homepage-text">
                            <h3 className="homepage-text">Quase lá ! Preencha apenas só essas informações e ja poderá adotar um aluno :)</h3>
                        </div>
                        <div className="div-homepage-text">
                            <p>Já tem conta ? <a className="anchor-home-page" onClick={(e) => this.routeTo("sign-in")}  >Clique para entrar</a></p>
                        </div>


                        <div className="div-card-input">

                            <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Nome"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={(e) => this.changeElement(e, 'name')}

                                />
                            </div>
                            <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Email"
                                    type="email"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={(e) => this.changeElement(e, 'email')}

                                />
                            </div>


                            <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Celular"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={(e) => this.changeElement(e, 'phone')}

                                />
                            </div>


                            <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Data de Nascimento"
                                    type="email"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={(e) => this.changeElement(e, 'birthday')}

                                />
                            </div>

                            {/* <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Phone"
                                    type="text"
                                    onChange={this.onChangePhone}
                                    onFocus={this.onFocus}
                                    variant="outlined"
                                    InputProps={{
                                        inputComponent: this.TextMaskCustom.bind(this),
                                      }}
                                />
                            </div> */}

                            <div className="card-input input-sign-up-size">
                                <TextField
                                    id="outlined-password-input"
                                    label="Senha"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={(e) => this.changeElement(e, 'password')}

                                />
                            </div>
{/* 
                            <div>
                                <label>Sou um aluno</label>
                                <Switch
                                    checked={this.state.checkedAluno}
                                    onChange={this.handleChange}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div> */}
                            <Button className="button-sign-up" onClick={(e) => this.handleSubmit(e)} variant="contained" >
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                    <div className="div-img div-card">
                        <img className="imagem-inicial-cadastro" alt="imagem-inicial-pessoas" src={imagem_inicial} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;



