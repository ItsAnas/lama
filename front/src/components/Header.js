import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Menu, Dropdown, Icon } from 'antd'

class Header extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            isLogged: false,
        }
    }

    componentWillMount() {
        if (localStorage.token)
            this.setState({ isLogged : true })
    }

    componentWillReceiveProps(nextProps) {
        let isLogged = false
        if (localStorage.token)
            isLogged = true
        if (isLogged !== this.state.isLogged)
            this.setState({ isLogged })
    }

    _onSubmit = () => {
        localStorage.clear()
        window.location = 'http://localhost:3000/'
    }
    
    render() {

        const { isLogged } = this.state

        let menu
        if (isLogged === false)
        {
            menu = (
            <Menu>
                <Menu.Item>
                    <Link to='/signin'>
                        Signin
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/register'>
                        Register
                    </Link>
                </Menu.Item>
            </Menu>
          )
        }

        else {
            menu = (
                <Menu>
                    <Menu.Item>
                        <Link to='/profile'>
                            My Profile
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/logout'>
                            Logout
                        </Link>
                    </Menu.Item>
                </Menu>
              )
        }

        return (
            <Row className='header' type='flex' justify='center'>
                <Col offset={0}>
                    <Link to='/'>
                        Home
                    </Link>
                </Col>
                <Col xs={{offset:18}} offset={20}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link">
                            Menu <Icon type="down" />
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        )
            
    }
}

export default Header