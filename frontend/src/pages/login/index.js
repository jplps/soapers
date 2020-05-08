import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default () => {
	const [form, setValues] = useState({ email: '', password: '' });
	const [signUP, setSignUP] = useState(true);
	const [success, setSuccess] = useState({});

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

		setSuccess('loading');

		// Defining the url for the query
		let url;
		if (signUP) { url = '/auth/signup' }
		else { url = '/auth/signin' }

		// Fetch logic
		// Await and set response
		const { data } = await api.post(url, form, { withCredentials: true });

		// Check if it's not an error message
		if (data.err) { return setSuccess({ err: data.err }); }

		return setSuccess({ user: data.user });
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

			{success === 'loading' ? <p>loading</p>
				: success.user ? <Redirect to="/main" />
					: (
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

								{success !== 'undefined' && success.err && <p dangerouslySetInnerHTML={{ __html: success.err }} />}

								<button>enviar</button>
							</fieldset>
						</form>
					)}
		</div>
	);
}