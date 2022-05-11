import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { FormattedMessage } from 'react-intl';
import './Login.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleLoginApi } from "../../services/userServices"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            show: false
        }
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

    handleLogin = async () => {
        try {
            await handleLoginApi(this.state.email, this.state.password)
                .then((response) => {
                    if (response.errorCode !== 1) {
                        toast.error(response.message);
                    }
                    else {
                        toast.success(response.message);
                    }
                })
            /* .catch((error) => {
                console.log(error);
            }) */
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            }
        }
    }

    handleShowPassword = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className='login-background d-flex justify-content-center align-items-center'>
                <div className='login-container row col-sm-4'>
                    <div className='login-content'>
                        <h3 className="text-center mb-4 heading">ĐĂNG NHẬP</h3>

                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="InputEmail1">Email address</label>
                            <input value={this.state.email} onChange={(event) => this.handleEmail(event)} type="email" className="input" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label className='titleInput' htmlFor="InputPassword1">Password</label>
                            <div className="d-flex flex-row password-input">
                                <input value={this.state.password} onChange={(event) => this.handlePassword(event)} type={this.state.show ? "text" : "password"} className="input" id="InputPassword1" placeholder="Password" />
                                <span onClick={() => { this.handleShowPassword() }}>
                                    {
                                        this.state.show ?
                                            <i className="far fa-eye icon-eyes"></i>
                                            :
                                            <i className="far fa-eye-slash icon-eyes"></i>
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="text-danger my-3">Missing password</div>
                        <div className=" row justify-content-center my-3 px-3">
                            <button onClick={() => this.handleLogin()} className="btn-block btn-color">Đăng nhập</button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a href="#"><small className="text-muted">Quên mật khẩu?</small></a>
                        </div>

                        <div className="d-flex flex-row  justify-content-center mt-3">
                            <p style={{ paddingTop: '12px' }}>Bạn chưa có tài khoản?</p>
                            <Link className='register' to="/register">Tham gia TODOnow ngay!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
