import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd'

class LoggedInLanding extends Component {
    
    render() {

        return (
            <Row className='landing-box' >
                
                    <Col className='landing-title' span={24}>
                        Now you're logged in
                    </Col>

                    <Col span={24}>
                        <Link to='/profile'>
                            See your profile
                        </Link>
                    </Col>
        
            </Row>
        )
    }
}

export default LoggedInLanding