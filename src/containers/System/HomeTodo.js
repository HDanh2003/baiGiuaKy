import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./HomeTodo.scss";
import { getAllTodo } from "../../services/todoServices";
import { toast } from 'react-toastify';
class HomeTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await getAllTodo(this.props.userInfo.id);
            if (response.errorCode === 1) {
                this.setState({
                    todoList: response.data
                })
            }

        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Network error!");
            }
        }
    }

    render() {
        let todoList = this.state.todoList;
        return (
            <div>
                <div className="cnt">
                    <div className="wrapper align-items-center justify-content-between wm-100">
                        <div className="info d-flex flex-column wm-100">
                            <div className="ip rounded" style={{ marginBottom: '32px' }}>
                                <div className="form-group mb-16">
                                    <label className='titleInput' htmlFor="content">Nội dung</label>
                                    <input type="text" className="form-control text-muted" id="content" placeholder="Nội dung" name="content" />
                                </div>
                                <div className="form-group ">
                                    <label className='titleInput' htmlFor="time">Thời gian</label>
                                    <input type="datetime-local" className="form-control text-muted" id="time" placeholder="Thời gian" name="time" />
                                </div>
                            </div>
                            <div className="bt">
                                <button id="submitbtn" type="submit" className="form-control btn-color" >Thêm</button>
                            </div>
                        </div>
                        <div className="todo d-flex flex-column justify-content-between">
                            <div className="tbl table-responsive">
                                <table className="table">
                                    <thead className="title">
                                        <tr>
                                            <th>ID</th>
                                            <th>Nội dung</th>
                                            <th>Thời gian</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todoList && todoList.map((item, index) => {
                                                const d = new Date(item.date);
                                                return (
                                                    <tr key={`${index}-${item.id}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.content}</td>
                                                        <td>{d.toLocaleDateString() + " " + d.toLocaleTimeString()}</td>
                                                        <td className="tdbtn">
                                                            <button className="btnfix"><i className="far fa-edit"></i></button>
                                                            <button><i className="fas fa-trash-alt"></i></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTodo);
