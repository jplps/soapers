import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default () => {
	const [signUP, setSignUP] = useState(true);
	const [form, setValues] = useState({ email: '', password: '' });
	const [response, setResponse] = useState();

	// Update form field value
	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// Handle user sign
	const handleLogin = async e => {
		e.preventDefault();

		// Defining the url for the query
		let url;
		if (signUP) { url = '/auth/signup' }
		else { url = '/auth/signin' }

		// Fetch logic
		// Await and set response
		const { data } = await api.post(url, form, { withCredentials: true });
		setResponse(data);
		// Check if it's not an error message
		if (data.err) { return }

		return <Redirect to="/main" />
	};

	return (
		<div id="login">
			<h1>distribunetes</h1>

			<div className="login-options">
				<button className={signUP ? 'pressed' : ''} onClick={e => { e.preventDefault(); setSignUP(true); }}>
					cadastrar
						</button>

				<button className={signUP ? '' : 'pressed'} onClick={e => { e.preventDefault(); setSignUP(false); }}>
					entrar
						</button>
			</div>

			<form onSubmit={handleLogin}>
				<fieldset>
					<div className="form-email">
						<label>usuário</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="usuario@exemplo.com.br"
							value={form.email}
							onChange={updateField}
							required
						/>
					</div>

					<div className="form-pass">
						<label>senha</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="********"
							value={form.password}
							onChange={updateField}
							required
						/>
					</div>

					{typeof response !== 'undefined' && response.err && <p dangerouslySetInnerHTML={{ __html: response.err }} />}

					<button>enviar</button>
				</fieldset>
			</form>
		</div>
	);
}