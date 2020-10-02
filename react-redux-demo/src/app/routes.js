import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Users, Topics } from '../App';


export default function AppRoutes() {
	return (
		<Switch>
			<Route path='/topics'>
				<Topics />
			</Route>
			<Route path='/users'>
				<Users />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
		</Switch>
	);
}