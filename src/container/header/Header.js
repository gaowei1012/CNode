import React from 'react'
import { Input } from 'antd'

import LogoImg from './img/logo.svg'
import './header.css'

const Search = Input.Search


class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <div className="w">
                    <div className="nav-left">
                        <div className="img">
                            <img src={LogoImg} />
                        </div>
                        <div className="search">
                            <Search
                                placeholder="search"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="items">
                            <span>首页</span>
                            <span>新手入门</span>
                            <span>API</span>
                            <span>关于</span>
                            <span>注册</span>
                            <span>登录</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header