import React, { Suspense } from "react"
import ReactDOM from "react-dom"
// import Header from "header/Header"
// import Dashboard from "dashboard/Dashboard"
// import Details from "details/Details"
import { AppContextProvider } from "host/store"

import "./index.css"

const HeaderComponent = React.lazy(() => import("header/Header"))
const DashboardComponent = React.lazy(() => import("dashboard/Dashboard"))
const DetailsComponent = React.lazy(() => import("details/Details"))

const App = () => (
	<>
		<Suspense fallback={<div>Loading...</div>}>
			<HeaderComponent />
			<DashboardComponent />
			<DetailsComponent />
		</Suspense>
	</>
)

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById("app")
)
