import React, { useState, useEffect } from 'react'
import Link from "next/link";
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router'
import Head from 'next/head';
import { CaretLeftOutlined, SendOutlined } from '@ant-design/icons';
import ChatView from '../components/chat/chat.js'
import * as dataSource from '../data/chat/data.json';
const Chat = (props) => {
    const { router } = props;
    const data = dataSource.data
    const [state, setState] = useState({
        user: router.query.user,
        messages: []
    });
    useEffect(() => {
        readMessages();
    }, []);
    const readMessages = () => {
        const new_data = data.find(val => val.id === "max")
        const messages = new_data.contents.find(val => val.name === state.user)
        setState({
            ...state,
            messages: messages ? messages.messages : []
        })
    };
    return (
        <div>
            <Head>
                <title>Chat LIst</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
            <div className="navbar navbar-white sticky-top bg-head-chat flex-md-nowrap p-0" >
                <div className="navbar-brand col-sm-3 col-md-2 mr-0" >
                    <Link href={`/list`}>
                        <CaretLeftOutlined style={{ fontSize: 22, color: '#fff' }} />
                    </Link>
                </div>
                <label level={3} style={{ fontSize: 22, color: '#fff' }} > {state.user}</label>
                <div className="navbar-brand col-sm-3 col-md-2 mr-0" >
                </div>
            </div>
            <div className="container-chat">
                <main>{state.messages && <ChatView data={state.messages} />}</main>
            </div>
            <div className="d-flex  justify-content-center" >
                <input className="input-chat" type="text" />
                <SendOutlined className="send-message" />
            </div>
        </div>
    )
}
export default withRouter(Chat)
Chat.propTypes = {
    router: PropTypes.object,
};