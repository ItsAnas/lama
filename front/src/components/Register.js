import React, { Component } from 'react'
import { Button, Form, Input, message, Row, Col } from 'antd'

class Register extends Component {
    _handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((errors, values) => {
        const url = `http://localhost:8000/api/user/signup`
        const parameters = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }
        if (!errors) {
            fetch(url, parameters)
            .then((res) => {
                res.json()
                .then(resJson => {
                    if (resJson.state.error === false) {
                        message.success('Your account has been created')
                    }
                    else {
                        const errors = resJson.state.errors
                        errors.forEach(err => {
                            message.error(err.message)
                        })
                    }
                })
            })
        }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Row className='form-box' type='flex' justify='center'>
                <Col xs={{ span: 20 }} md={{ span: 12 }} lg={{ span: 8 }}>
                    <h3>Register</h3>
                    <Form className='register-form' onSubmit={this._handleSubmit}>
                        <Form.Item wrapperCol={ { span: 24, offset: 0 } }>
                            { getFieldDecorator('email', {
                                rules: [ {
                                    message: 'Please type your email address',
                                    required: true
                                } ],
                            })(
                                <Input placeholder='Email address' type={ 'email' } />
                            )}
                        </Form.Item>
                        <Form.Item wrapperCol={ { span: 24, offset: 0 } }>
                            { getFieldDecorator('password', {
                                rules: [ {
                                    message: 'Please type your password',
                                    required: true
                                } ],
                            })(
                                <Input placeholder='Password' type={ 'password' } />
                            )}
                        </Form.Item>
                        <Form.Item wrapperCol={ { span: 24, offset: 0 } }>
                            <Button className='form-button large' htmlType='submit' type='primary'>
                                Confirm
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}
const WrappedRegisterForm = Form.create()(Register)

export default WrappedRegisterForm