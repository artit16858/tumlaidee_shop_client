import React, { useState, useEffect, useRef, useContext } from 'react'
import Link from "next/link";
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router'
import Head from 'next/head';
import { CaretLeftOutlined, SendOutlined } from '@ant-design/icons';
import ChatView from '../../components/chat/chat.js'
import * as dataSource from '../../dataSource/chat/data.json';
import { SocketContext } from '../../socket-context';
const Chat = (props) => {

    const socket = useContext(SocketContext);
    const { router } = props;
    const [state, setState] = useState({
        user: "max",
        target: router.query.user,
        messages_id: '',
        messages: []
    });
    const [debounceMessage, setDebounceMessage] = useState('');
    const myRef = useRef(null)

    const receiveMessage = () => {
        socket.emit('receive message', state.user, state.target);

        socket.on('receive message', (messages) => {
            console.log("messages", messages);
            setState({
                ...state,
                messages_id: messages[0].endedAt,
                messages: messages[0].messages,
            })
             setDebounceMessage('');
            // executeScroll();
        });

        if (!state.user) {
            Router.push({
                pathname: '/'
            })
        }
    };

    useEffect(() => {
        receiveMessage();
        readMessages();

        return () => {
            socket.off('receive message');
        }
    }, []);



    const readMessages = () => {
        socket.emit('read message', state.user, state.target);
    };

    const sendMessages = () => {
        socket.emit('send message', state.messages_id, state.user, state.target, debounceMessage, false)
        receiveMessage();
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
                <input className="input-chat" type="text" value={debounceMessage} onChange={(e) => setDebounceMessage(e.target.value)} />
                <SendOutlined className="send-message" onClick={() => sendMessages()} />
            </div>
        </div>
    )
}
export default withRouter(Chat)
Chat.propTypes = {
    router: PropTypes.object,
};