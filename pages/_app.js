import React from 'react'
import Header from '../template/Header'
import Meta from '../template/Meta'
import Footer from '../template/Footer'
import Nav from '../template/Nav'
import Menu from '../template/Menu'

import '../assets/scss/styles.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Header />
            <Nav />
            <div class="container-fluid">
                <div class="row">
                    <Menu />
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Component {...pageProps} />

                    </main>

                </div>

            </div>
            <Footer />

        </>
    )
}

export default MyApp;
