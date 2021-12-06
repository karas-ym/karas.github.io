import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../service/cryptoApi';
import { Cryptocurrencies, News } from '.';
import Loader from '../components/loader'

const { Title } = Typography

function Homepage() {

    const { data, error, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats

    // console.log(data)

    if (isFetching) return <Loader />

    return (
        <div>
            <Title level={2} className='heading'>Global Crypto Stats</Title>

            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} />
                </Col>
            </Row>

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>show more</Link></Title>
            </div>
            <Cryptocurrencies limited />

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>show more</Link></Title>
            </div>
            <News limited />

        </div>
    )
}

export default Homepage