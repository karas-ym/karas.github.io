import { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../service/cryptoApi';
import Loader from '../components/loader'

function Cryptocurrencies({ limited }) {

    const count = limited ? 10 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        setCryptos(cryptoList?.data?.coins)

        const filterData = cryptoList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(filterData)

    }, [cryptoList, searchTerm])

    if (isFetching) return <Loader />

    return (
        <>
            {!limited &&
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={e => setSearchTerm(e.target.value)} />
                </div>
            }

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {
                    cryptos?.map((item) => (
                        <Col xs={24} sm={12} lg={6} className='crypto-card' key={item.id}>
                            <Link to={'/crypto/' + item.id}>
                                <Card
                                    title={item.rank + '. ' + item.name}
                                    extra={<img src={item.iconUrl} alt='crypto' className='crypto-image' />}
                                    hoverable
                                >
                                    <p>Price:{millify(item.price)}</p>
                                    <p>Price:{millify(item.marketCap)}</p>
                                    <p>Price:{millify(item.change)}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Cryptocurrencies
