import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import Header from "header/Header"
import Dashboard from "dashboard/Dashboard"
import Details from "details/Details"
import { AppContextProvider } from "host/store"

import "./index.css"

const App = () => (
	<AppContextProvider>
		<Header />
		<Dashboard />
		<Details />
	</AppContextProvider>
)
ReactDOM.render(<App />, document.getElementById("app"))
