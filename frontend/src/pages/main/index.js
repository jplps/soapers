import React, { useState } from 'react';

import './styles.css';

export default () => {
	const [form, setValues] = useState({ email: '', password: '' });

	// Update form field value
	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// Handle user sign
	const handleSubmit = async e => {
		e.preventDefault();
	};

	return (
		<div id="purchase">
			<h1>distribunetes</h1>

			<h2>compras</h2>

			<form onSubmit={handleSubmit}>
				<fieldset>
					<div className="form-quant">
						<label>quantidade</label>
						<input
							type="number"
							id="number"
							name="number"
							placeholder="0"
							min="0"
							max="999999"
							value={form.number}
							onChange={updateField}
							required
						/>
					</div>

					<div className="form-date">
						<label>data</label>
						<input
							type="date"
							id="date"
							name="date"
							value={form.date}
							onChange={updateField}
							required
						/>
					</div>

					<button>registrar</button>
				</fieldset>
			</form>
		</div>
	);
}