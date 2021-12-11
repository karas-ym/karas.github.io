import { useState, useEffect } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../service/newsApi'
import { useGetCryptosQuery } from '../service/cryptoApi';
import Loader from '../components/loader'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function News({ limited }) {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: limited ? 6 : 20
    })

    const { data } = useGetCryptosQuery(50)

    const [cryptoNewsList, setCryptoNewsList] = useState([])

    useEffect(() => {

        setCryptoNewsList(cryptoNews?.value)

    }, [cryptoNews])

    if (!cryptoNews) return <Loader />

    return (
        <Row gutter={[24, 24]}>
            {
                !limited && (
                    <Col span={24}>
                        <Select
                            showSearch
                            allowClear
                            className='select-news'
                            placeholder='Select a crypto'
                            optionFilterProp='children'
                            onChange={value => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().charAt(input.toLowerCase()) >= 0}
                        >
                            <Option value='Cryptocurrency'>Cryptocurrency</Option>
                            {data?.data?.coins.map(coin => <Option value={coin.name} key={coin.id}>{coin.name}</Option>)}
                        </Select>
                    </Col>
                )
            }


            {
                cryptoNewsList?.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                </div>
                                <p>
                                    {
                                        news.description > 100
                                            ? `${news.description.substring(0, 100)}...`
                                            : news.description
                                    }
                                </p>
                                <div className='provider-container'>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt='news' />
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News
