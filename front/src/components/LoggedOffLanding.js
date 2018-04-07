import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd'

class LoggedOffLanding extends Component {
    
    render() {

        return (
            <Row className='landing-box' >
                
                    <Col className='landing-title' span={24}>
                        Discover our amazing tool
                    </Col>

                    <Col span={24}>
                        <Link to='/register'>
                            Register now
                        </Link>
                    </Col>
        
            </Row>
        )
    }
}

export default LoggedOffLanding