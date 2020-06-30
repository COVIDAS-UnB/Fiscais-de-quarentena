import React, { Component } from "react";
import classes from './SignIn.css';
import Cookies from "js-cookie";
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import imagem_inicial from "../../assets/img/imagem-pagina-inicial.png";
import axios from "../../axios";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class SignIn extends Component {
    state = {
        loadingSignIn: false,
        sucessSignIn: false,
        checkedCookies: false,
        form: {
            email: '',
            password: '',
        },
        rules: {
            email: [
                { required: true, message: "Por favor, seu email", trigger: 'change' }
            ],
            password: [
                { required: true, message: "Por favor, digite sua senha", trigger: 'change' },
            ],
        }
    };

    componentDidMount = () => {
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

    handleChange = (event) => {
        this.setState({ checkedCookies: event.target.checked });
    };

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    changeElement = (event, source) =>{
        this.setState({
            form: Object.assign({}, this.state.form, { [source]: event.target.value })
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let obj = {
            'email': this.state.form.email,
            'password': this.state.form.password
        }
        // this.setState({ loadingSignIn: true });
        //
        // const expirationDate = new Date(new Date().getTime() + 1111110 * 1000);
        // let token = "tokentestedeautenticacao";
        // Cookies.set('tk', token, {
        //     expires: expirationDate,
        //     secure: (window.location.protocol === 'https:')
        // });
        //
        // window.location.reload();

        axios.Auth(obj)
            .then((response)=>{
                this.setState({ sucessSignIn: true, loadingSignIn: false });

                const expirationDate = new Date(new Date().getTime() + 1111110 * 1000);
                let token = response.data.token;
                Cookies.set('tk', token, {
                    expires: expirationDate,
                    secure: (window.location.protocol === 'https:')
                });

                window.location.reload();
            })
            .catch((error) =>{
                this.setState({ sucessSignIn: false, loadingSignIn: false });
                console.log(error);
            });


        // this.refs.form.validate((valid) => {
        // if (valid) {

        // this.routeTo("");

        // } else {
        //     this.setState({ loadingSignIn: false });
        // }
        // });
    }

    render() {
        return (
            <div class="div-home-page full-page center">

                <MenuSuperior routeTo={this.routeTo}></MenuSuperior>

                <div className="div-card-sign-in">
                    <div className="div-card">
                        <div>
                            <h1 className="title-sign-in">Entrar</h1>
                        </div>
                        <div >
                            <p className="dont-have-account">Ainda não tem conta ? <a className="anchor-home-page" onClick={(e) => this.routeTo("sign-up")}  >Clique para cadastrar</a></p>
                        </div>
                        <div className="div-card-input">
                            <div className="card-input">
                                <TextField
                                    className="input-sign-in"
                                    id="outlined-password-input"
                                    label="Email"
                                    type="email"
                                    onChange={(e) => this.changeElement(e, 'email')}
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                            </div>
                            <div className="card-input">

                                <TextField
                                    className="input-sign-in"
                                    id="outlined-password-input"
                                    label="Senha"
                                    type="password"
                                    onChange={(e) => this.changeElement(e, 'password')}
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                            </div>

                            <div>
                                <label>Me mantenha conectado</label>
                                <Checkbox
                                    checked={this.state.checkedB}
                                    onChange={this.handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            </div>

                            <Button className="button-sign-in" onClick={(e) => this.handleSubmit(e)} variant="contained" color="primary">
                                Entrar
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SignIn;