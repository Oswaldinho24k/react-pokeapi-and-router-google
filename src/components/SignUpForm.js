import React, { Component } from 'react'
import { Input, Tooltip, Icon, Button } from 'antd';
import { createUser } from '../services/firebase'

export class SignUpForm extends Component {

    state = {
        newUser: {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { newUser } = this.state
        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
        console.log(newUser)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { newUser } = this.state
        createUser(newUser.email, newUser.password)
            .then(res => {
                this.props.history.push('/login')
            }).catch(e => {
                console.log(e)
            })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <Input
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <Button htmlType="submit" type="primary" block>Primary</Button>

                </form>
            </div>
        )
    }
}

export default SignUpForm
