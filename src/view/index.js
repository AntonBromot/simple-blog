import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import { ROUTES_MAP } from "../constants/RouterMap";
import "../styles/main.scss";
import Navigation from "./components/Navigation"

const allRoutes = () => ROUTES_MAP.map(({ path, component }, key) => <Route exact { ...{ path, component, key } } />)

const Application = () => (
	<div className="application">
		<Navigation />
		<div className="main">
			<Switch>
				<Redirect exact from="/" to="/1" />
				{ allRoutes() }
			</Switch>
		</div>
		<Footer/>
	</div>
)

export default Application

