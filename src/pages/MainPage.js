import React, { Fragment, useState } from 'react';
import 'antd/dist/antd.css';
import './MainPage.css';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import CardsBoard from "./CardsBoard";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu

const MainPage = () => {
    const [username, setUserName] = useState("אוראל");

    return (

        <Layout className="layout">
            <Header className="header">
                <div className="logo" >
                    Shabi
                </div>
                <Menu theme="dark" key="user" mode="horizontal">
                    <SubMenu
                        title={
                            <Fragment>
                                <span style={{ color: '#999', marginRight: 4 }}>
                                    שלום, {/* <Trans>Hi,</Trans> */}
                                </span>
                                <span>{username}</span>
                                <Avatar style={{ marginRight: 8 }}>U</Avatar>
                            </Fragment>
                        }
                    >
                        <Menu.Item key="SignOut">
                            {/* <Trans>Sign out</Trans> */}
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
            <Content style={{ padding: '0 0px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <CardsBoard/>
                {/* <div className="site-layout-content">Content</div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Develop by Orel Cohen</Footer>
            <Footer style={{ textAlign: 'center' }}>©2021 Version 1.0</Footer>
        </Layout>

    )
}

export default MainPage;
