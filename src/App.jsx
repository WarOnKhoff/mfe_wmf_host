import React, { Suspense, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
// import Header from "header/Header"
// import Dashboard from "dashboard/Dashboard"
// import Details from "details/Details"
import { AppContextProvider, useAppContext } from "host/store"
import mountVueSidepanel from "sidepanel/mountVueSidepanel"

import "./index.css"

const HeaderComponent = React.lazy(() => import("header/Header"))
const DashboardComponent = React.lazy(() => import("dashboard/Dashboard"))
const DetailsComponent = React.lazy(() => import("details/Details"))

const VueSidepanel = () => {
	const sidepanelRef = useRef()
	const { selectedCity } = useAppContext()

	useEffect(() => {
		mountVueSidepanel(sidepanelRef.current)
	}, [])

	return (
		<div
			ref={sidepanelRef}
			style={{
				minWidth: 350,
				display: selectedCity ? "block" : "none"
			}}
		/>
	)
}

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<div style={{ display: "flex" }}>
					<div style={{ flex: 1 }}>
						<HeaderComponent />
						<DashboardComponent />
						<DetailsComponent />
					</div>
					<VueSidepanel />
				</div>
			</Suspense>
		</>
	)
}

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById("app")
)
