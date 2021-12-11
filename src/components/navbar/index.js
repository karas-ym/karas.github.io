import { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../../images/cryptocurrency.png'

function Navbar() {

    const [screenSize, setScreenSize] = useState()
    const [activeMenu, setActiveMenu] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
            setActiveMenu(true)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>

            {activeMenu &&
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />} key={'Home'}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key={'Cryptocurrencies'}>
                        <Link to='/Cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />} key={'Exchanges'}>
                        <Link to='/Exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />} key={'News'}>
                        <Link to='/News'>News</Link>
                    </Menu.Item>
                </Menu>
            }
        </div>
    );
}

export default Navbar;