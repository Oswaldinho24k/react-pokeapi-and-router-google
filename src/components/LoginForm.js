import React, { Component } from 'react'
import { Input, Tooltip, Icon, Button, message } from 'antd';
import { logIn } from '../services/firebase'

export class LoginForm extends Component {

    state = {
        user: {

        }
    }

    handleChange = (event) => {
        const { user } = this.state
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { user } = this.state
        logIn(user.email, user.password)
            .then(res => {
                message.success(`BIenvenido ${res.user.email}`)
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

export default LoginForm
