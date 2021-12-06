import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components'
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './pages'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path='/' component={Homepage}></Route>
                                <Route exact path='/exchanges' component={Exchanges}></Route>
                                <Route exact path='/cryptocurrencies' component={Cryptocurrencies}></Route>
                                <Route exact path='/crypto/:coinId' component={CryptoDetails}></Route>
                                <Route exact path='/news' component={News}></Route>
                            </Switch>
                        </div>
                    </Layout>

                    <div className='footer'>
                        <Typography.Title level={5} style={{ color: '#ccc', textAlign: 'center' }}>
                            Crypto
                            <br />
                            All rights reserved
                        </Typography.Title>
                        <Space>
                            <Link to='/'>Home</Link>
                            <Link to='/exchanges'>Exchanges</Link>
                            <Link to='/news'>News</Link>
                        </Space>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
