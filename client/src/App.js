import React, { Component } from 'react';
import imgLogo from './assets/images/logo.png';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import Home from './Home';
import Home2 from './Home2';
import Login from './Login';
import User from './User';
import Logout from './Logout';
import Footer from './Footer';
import { Route, Link } from 'react-router-dom'
import { withCookies } from 'react-cookie';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Menu attached='top' inverted>
                    <a role="button" className="header item" href="/">
                        <img alt="" className="logo" src={imgLogo} />
                        <span className="mobile hidden">Brand</span>
                    </a>
                    <Menu.Item name='editorials' as={Link} to="/">
                        Home
                    </Menu.Item>
                    <Menu.Item name='editorials' as={Link} to="/home2">
                        Home2
                    </Menu.Item>
                    <Dropdown item icon='ellipsis vertical' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Icon name='dropdown' />
                                <span className='text'>New</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Document</Dropdown.Item>
                                    <Dropdown.Item>Image</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>Open</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position='right'>
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input' style={{maxWidth: '100px'}}>
                                <input className='prompt' type='text' placeholder='Search...' />
                                <i className='search link icon' />
                            </div>
                            <div className='results' />
                        </div>
                        { !this.props.cookies.get('auth_token') && (
                            <Menu.Item name='editorials' as={Link} to="/login">
                                Login
                            </Menu.Item>
                        ) }
                        { this.props.cookies.get('auth_token') && (
                            <Menu.Item name='editorials' as={Link} to="/user">
                                User
                            </Menu.Item>
                        ) }
                        { this.props.cookies.get('auth_token') && (
                            <Menu.Item name='logout' as={Link} to="/logout">
                                Logout
                            </Menu.Item>
                        ) }
                    </Menu.Menu>
                </Menu>

                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/home2" component={Home2} />
                <Route path="/login" component={Login} />
                <Route path="/user" component={User} />
                <Route path="/logout" component={Logout} />

                <Footer />

            </div>
        );
    }
}

export default withCookies(App);