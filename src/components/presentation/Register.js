import React, { Component } from 'react'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            registration: {
                username: '',
                password: ''
            }
        }
    }

    updateRegistration(event){
        let updated = Object.assign({}, this.state.registration)
        updated[event.target.id] = event.target.value
        this.setState({
            registration: updated
        })
    }

    submitRegistration(event){
        event.preventDefault()

        if (this.state.registration.username.length == 0){
            alert('Please add your username.')
            return
        }

        if (this.state.registration.password.length == 0){
            alert('Please set your password.')
            return
        }

        this.props.onRegister(this.state.registration)
    }

    submitLoginCredentials(event){
        event.preventDefault()
        if (this.state.registration.username.length == 0){
            alert('Please add your username.')
            return
        }

        if (this.state.registration.password.length == 0){
            alert('Please set your password.')
            return
        }

        this.props.onLogin(this.state.registration)
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <input onChange={this.updateRegistration.bind(this)} id="username" className="formControl" type="text" placeholder="Username" /><br /><br />
                <input onChange={this.updateRegistration.bind(this)} id="password" className="formControl" type="password" placeholder="Password" /><br /><br />
                <button onClick={this.submitRegistration.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Join</button><br /><br />
                <button onClick={this.submitLoginCredentials.bind(this)} className="btn btn-success">Sign In</button>

            </div>
        )
    }
}

const localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
}

export default Register