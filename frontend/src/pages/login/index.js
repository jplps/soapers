import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default () => {
	const [user, setUser] = useState();
	const [signUP, setSignUP] = useState(true);
	const [form, setValues] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState();

	// Update form field value
	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// Handle SignUP
	const handleLogin = async e => {
		e.preventDefault();

		// Defining the url for the query
		let url;
		if (signUP) { url = '/auth/signup' }
		else { url = '/auth/signin' }

		// Fetch logic
		setLoading(true);
		// Await and set response
		const { data } = await api.post(url, form);
		setResponse(data);
		// Check if it's not an error message
		if (!data.err) { setUser(data); }
		// Flag the end of fetch
		setLoading(false);
	};

	return (
		<>
			{user ? <Redirect to="/main" /> : (
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

					{loading ? <p>loading</p> : (
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
					)}
				</div>
			)}
		</>
	);
}