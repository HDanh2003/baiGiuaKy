import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { FormattedMessage } from 'react-intl';
import './Register.scss';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPass: '',
            showPass: false,
            showConfirm: false
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleConfirmPassword = (event) => {
        this.setState({
            confirmPass: event.target.value
        })
    }

    handleRegister = () => {
        console.log("Email: ", this.state.email);
        console.log("password: ", this.state.password);
        console.log("confirm pass: ", this.state.confirmPass);
    }

    handleShowPassword = () => {
        this.setState({
            showPass: !this.state.showPass
        })
    }

    handleShowConfirmPassword = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        })
    }


    render() {
        return (
            <div className='login-background d-flex justify-content-center align-items-center'>
                <div className='login-container row col-sm-4'>
                    <div className='login-content'>
                        <h3 className="text-center mb-4 heading">ĐĂNG KÝ</h3>

                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="username">Username</label>
                            <input value={this.state.username} onChange={(event) => this.handleUsername(event)} type="text" className="input" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="InputEmail1">Email address</label>
                            <input value={this.state.email} onChange={(event) => this.handleEmail(event)} type="email" className="input" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="InputPassword1">Password</label>
                            <div className="d-flex flex-row password-input">
                                <input value={this.state.password} onChange={(event) => this.handlePassword(event)} type={this.state.showPass ? "text" : "password"} className="input" id="InputPassword1" placeholder="Password" />
                                <span onClick={() => { this.handleShowPassword() }}>
                                    {
                                        this.state.showPass ?
                                            <i className="far fa-eye icon-eyes"></i>
                                            :
                                            <i className="far fa-eye-slash icon-eyes"></i>
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="InputPassword1">Confirm Password</label>
                            <div className="d-flex flex-row password-input">
                                <input value={this.state.confirmPass} onChange={(event) => this.handleConfirmPassword(event)} type={this.state.showConfirm ? "text" : "password"} className="input" id="InputPassword1" placeholder="Confirm Password" />
                                <span onClick={() => { this.handleShowConfirmPassword() }}>
                                    {
                                        this.state.showConfirm ?
                                            <i className="far fa-eye icon-eyes"></i>
                                            :
                                            <i className="far fa-eye-slash icon-eyes"></i>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className=" row justify-content-center my-3 px-3">
                            <button onClick={() => this.handleRegister()} type="submit" className="btn-block btn-color">Đăng ký</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
