import React, { Component } from 'react'
import UserDetails from './UserDetails'

class Detail extends Component {
    render() {
		const user_details = [
			{
				username: 'Charlie',
				email: 'charlie@gmail.com',
			},
		]
		return (
			<div className="container">
				<UserDetails characterData={user_details} />
			</div>
		)
    }
}

export default Detail