import React, { useState } from 'react';

import api from '../../services/api';
import './styles.css';

export default () => {
	const [loading, setLoading] = useState(false);
	const [signUP, setSignUP] = useState(true);
	const [form, setValues] = useState({ email: '', password: '' });

	// Update form field value
	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// Handle SignUP
	const handleSignUP = async e => {
		e.preventDefault();

		let newUser;
		setLoading(true);
		if (signUP) {
			newUser = await api.post('/auth/signup', form);
		}
		else {
			newUser = await api.post('/auth/signin', form);
		}
		setLoading(false);

		console.log({ newUser });
	};

	return (
		<div id="login">
			<h1>distribunetes</h1>

			<div className="login-options">
				<button onClick={e => { e.preventDefault(); setSignUP(true); }}>
					cadastro
				</button>
				<button onClick={e => { e.preventDefault(); setSignUP(false); }}>
					login
				</button>
			</div>

			<form onSubmit={handleSignUP}>
				<fieldset disabled={loading} aria-busy={loading}>
					<div className="form-email">
						<label>@</label>
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
						<label>*</label>
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
					<button>{signUP ? 'cadastrar' : 'logar'}</button>
				</fieldset>
			</form>
		</div>
	);
}