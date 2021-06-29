import React from "react";
import AppContainer from "./components/Navigation";
import UserProvider from "./components/ContextApi";

const App = () =>
	<UserProvider>
		<AppContainer/>
	</UserProvider>;


export default App;