import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Link, NavLink } from 'react-router-dom'
import Home from '../pages/home';
const { Header, Content, Footer } = Layout;
// import Home from '../pages/home';
// import About from '../pages/about';
// import Conatct from '../pages/contact';
const items = [
    {
        label: 'Home',
        key: '/home'
    },
    {
        label: 'About',
        key: '/about'
    },
    {
        label: 'Contact',
        key: '/contact'
    }
]
const Navbar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();

    // const locationRef = window.location.pathname;
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {/* <div className="demo-logo" />
                <Menu
                    onClick={(data) => (navigate(data.key))}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                /> */}
                <NavLink to={'/home'}><h1 style={{color: 'white', margin: '60px'}}>Home</h1></NavLink>
                <NavLink to={'/about'}><h1 style={{color: 'white',  margin: '60px'}}>About</h1></NavLink>
                <NavLink to={'/contact'}><h1 style={{color: 'white', }}>Contact</h1></NavLink>
            </Header>
            {/* <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {locationRef.toUpperCase()}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer> */}
        </Layout>
    );
};
export default Navbar;