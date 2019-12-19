import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Clock from "./pages/clock/index";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Clock} />
			</Switch>
		</Router>
	);
}
