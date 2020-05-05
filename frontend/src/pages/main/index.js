import React from 'react';

import fetch from '../../services/api';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			users: []
		};
	}

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = async () => {
		const { data: { users } } = await fetch('/users');
		this.setState({ loading: false, users: users });
	};

	render() {
		return (
			<>
				{this.state.loading ?
					<p>loading</p>
					: this.state.users.map(user => <p key={user.id}>{user.email}</p>)
				}
			</>
		);
	}
}