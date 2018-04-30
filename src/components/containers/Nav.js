			    // <a class="nav-tab" href="#">Dashboard</a>
			    // <a class="nav-tab" href="#">Reservations</a>
			    // <a class="nav-tab" href="#"> Profiles </a>
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
	render(){
		// const currentUser = (this.props.user.currentUser==null) ? null: <p>Welcome, {this.props.user.currentUser}</p>
        const currentUser = this.props.user.currentUser

		return (
            <nav>
			    <span class="navbar-brand mb-0 h1">CoachingWow</span>

			    <a class="nav-tab" href="/auth/logout"> { (currentUser==null) ? null: <p>Log out</p> } </a>
			</nav>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.account
	}
}

export default connect(stateToProps)(Nav)

