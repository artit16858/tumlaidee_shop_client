import React, { Component } from "react";
import { Spin, Space } from 'antd';
import Router from "next/router";
import Login from './login';



let user_login = null
export default class Index extends Component {

    componentDidMount = () => {
        if (process.browser) {
            user_login = JSON.parse(localStorage.getItem('user_login'))
        }
        if (user_login !== null) {
            Router.push("/customer");
        }
    };

    render() {
        if (process.browser) {
            user_login = JSON.parse(localStorage.getItem('user_login'))
        }
        if (user_login === null) {
            return <Login>...</Login>
        } else {
            return <Space size="middle"> <Spin size="large" /> </Space>
        }
    }
}

