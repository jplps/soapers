import React from 'react';

import api from '../../services/api';

export default class Main extends React.Component {
	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = async () => {
		try {
			const resp = await api.get('/');

			return console.log(resp);
		} catch (err) {
			return console.log(err);
		}
	};

	render() {
		return <p>Ready to consume</p>
	}
}