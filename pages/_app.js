import React from 'react'
import Header from '../template/Header'
import Meta from '../template/Meta'
import Footer from '../template/Footer'
import Nav from '../template/Nav'
import Menu from '../template/Menu'
import 'antd/dist/antd.css';

import '../assets/scss/styles.scss'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Header />
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Component {...pageProps} />
                    </main>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default MyApp;
