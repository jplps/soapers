import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Login from './components/login/login';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Login} />
			<Route path="/main" component={Main} />
		</Switch>
	</BrowserRouter>
)

export default Routes;