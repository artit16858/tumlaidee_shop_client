import React, { useState } from 'react'
import Head from 'next/head';
import { Typography } from 'antd';

import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import ListChat from '../components/chat/list.js'



const { Title } = Typography;


export default function Chat() {
    let data = [
        {
            id: 'max',
            contents: [
                {
                    name: 'add',
                    picture: '/assets/images/1.jpg',
                    endedAt: 1570454329003,
                    messages: [
                        {
                            user: '장만월 사장님',
                            message: '회장님 어디세요?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '식사중입니다.',
                            isRead: true
                        },
                        {
                            user: '장만월 사장님',
                            message: '언제쯤 오세요?',
                            isRead: false
                        },
                        {
                            user: '장만월 사장님',
                            message: '얼른 오세요~',
                            isRead: false
                        }
                    ]
                },
                {
                    name: '신정근 바텐더',
                    picture: '/assets/images/3.jpg',
                    endedAt: 1570551864061,
                    messages: [
                        {
                            user: '신정근 바텐더',
                            message: '회장님',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '신정근 바텐더',
                            message: '오시는 길에 와인좀 사다주세요!',
                            isRead: false
                        }
                    ]
                },
                {
                    name: '이미라 의사',
                    picture: '/assets/images/4.jpg',
                    endedAt: 1570887765818,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '미라님',
                            isRead: true
                        },
                        {
                            user: '이미라 의사',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '이미라 의사',
                            message: '말씀하세요!',
                            isRead: false
                        }
                    ]
                },
                {
                    name: '구찬성 지배인',
                    picture: '/assets/images/6.jpg',
                    endedAt: 1570531864061,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '찬성님',
                            isRead: true
                        },
                        {
                            user: '구찬성 지배인',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '휴가 잘보내고 계세요?',
                            isRead: true
                        }
                    ]
                },
                {
                    name: '노준석 총지배인',
                    picture: '/assets/images/5.jpg',
                    endedAt: 1570532864061,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '노준석 총지배인님',
                            isRead: true
                        },
                        {
                            user: '노준석 총지배인',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '건강은 좀 어떠세요?',
                            isRead: true
                        }
                    ]
                },
                {
                    name: '김유나 인턴',
                    picture: '/assets/images/7.jpg',
                    endedAt: 1570232864061,
                    messages: [
                        {
                            user: '김유나 인턴',
                            message: '안녕하세요!',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '새로오신 분인가요?',
                            isRead: true
                        },
                        {
                            user: '김유나 인턴',
                            message: '네 잘부탁드립니다.',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '환영합니다 :D',
                            isRead: true
                        },
                    ]
                }
            ],
        },
        {
            id: 'add',
            contents: [
                {
                    name: 'max',
                    picture: '/assets/images/8.jpg',
                    endedAt: new Date("2020/09/22").getTime(),
                    messages: [
                        {
                            user: '장만월 사장님',
                            message: '회장님 어디세요?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '식사중입니다.',
                            isRead: true
                        },
                        {
                            user: '장만월 사장님',
                            message: '언제쯤 오세요?',
                            isRead: true
                        },
                        {
                            user: '장만월 사장님',
                            message: '얼른 오세요~',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: 'asdasd',
                            isRead: true
                        }
                    ]
                }
            ]
        },
        {
            id: '신정근 바텐더',
            contents: [
                {
                    name: '최준원 회장님',
                    picture: '/assets/images/8.jpg',
                    endedAt: 1570551864061,
                    messages: [
                        {
                            user: '신정근 바텐더',
                            message: '회장님',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '신정근 바텐더',
                            message: '오시는 길에 와인좀 사다주세요!',
                            isRead: true
                        }
                    ]
                }
            ]
        },
        {
            id: '이미라 의사',
            contents: [
                {
                    name: '최준원 회장님',
                    picture: '/assets/images/8.jpg',
                    endedAt: 1570887765818,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '미라님',
                            isRead: true
                        },
                        {
                            user: '이미라 의사',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '이미라 의사',
                            message: '말씀하세요!',
                            isRead: true
                        }
                    ]
                }
            ]
        },
        {
            id: '구찬성 지배인',
            contents: [
                {
                    name: '최준원 회장님',
                    picture: '/assets/images/8.jpg',
                    endedAt: 1570531864061,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '찬성님',
                            isRead: true
                        },
                        {
                            user: '구찬성 지배인',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '휴가 잘보내고 계세요?',
                            isRead: true
                        }
                    ]
                }
            ]
        },
        {
            id: '노준석 총지배인',
            contents: [
                {
                    name: '최준원 회장님',
                    picture: '/assets/images/8.jpg',
                    endedAt: 1570532864061,
                    messages: [
                        {
                            user: '최준원 회장님',
                            message: '노준석 총지배인님',
                            isRead: true
                        },
                        {
                            user: '노준석 총지배인',
                            message: '네?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '건강은 좀 어떠세요?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '건강은 좀 어떠세요?',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '건강은 좀 어떠세요?',
                            isRead: true
                        }
                    ]
                }
            ]
        },
        {
            id: '김유나 인턴',
            contents: [
                {
                    name: '최준원 회장님',
                    picture: '/assets/images/8.jpg',
                    endedAt: 1570232864061,
                    messages: [
                        {
                            user: '김유나 인턴',
                            message: '안녕하세요!',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '새로오신 분인가요?',
                            isRead: true
                        },
                        {
                            user: '김유나 인턴',
                            message: '네 잘부탁드립니다.',
                            isRead: true
                        },
                        {
                            user: '최준원 회장님',
                            message: '환영합니다 :D',
                            isRead: true
                        },
                    ]
                }
            ]
        }
    ];
    const new_data = data.find(val => val.id === "max")
    const [state, setState] = useState({
        user: "max",
        data: new_data.contents
    });
    return (
        <div>
            <Head>
                <title>Chat LIst</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
            <nav className="navbar navbar-white sticky-top bg-white flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    <HomeOutlined />
                </a>
                <Title level={3}>{state.user}</Title>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">
                            <UserOutlined />
                        </a>
                    </li>
                </ul>
            </nav>
            <main>{state.data && <ListChat user={state.user} data={state.data} />}</main>
        </div>
    )
}
