import React from "react";

import { Router } from "react-router-dom";

import history from "./services/history";
import "~/config/ReactotronConfig";

import Routes from "~/routes";

import GlobalStyle from "~/styles/global";

function App() {
	console.tron.log("history");
	console.tron.log(history);
	return (
		<Router history={history}>
			<Routes />
			<GlobalStyle />
		</Router>
	);
}

export default App;
