import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import { Row, Col } from 'antd'

class Profile extends Component {

    constructor (props) {
        super(props)

        this.state = {
            email: ''
        }
    }

    componentWillMount() {
        if (localStorage.token) {
            const email = jwtDecode(localStorage.token).username
            this.setState({ email })
        }
    }

    render() {
        const { email } = this.state
        return (
            <Row className='landing-box' >
            
                <Col className='landing-title' span={24}>
                    <h3>
                        Profile
                    </h3>
                </Col>

                <Col span={24}>
                    Username : { email }
                </Col>
    
            </Row>
        )
    }
}

export default Profile