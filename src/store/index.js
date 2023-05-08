import { createContext, useContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const AppContext = createContext({})

const API_KEY = "304090ed092c4b3cbf0141340230105"
export const AppContextProvider = ({ children }) => {
	const [theme, setTheme] = useLocalStorage("theme", "light")
	const [cities, setCities] = useLocalStorage("cities", ["Riga"])
	const [selectedCity, setSelectedCity] = useLocalStorage("selected", "Riga")

	const toggleTheme = () =>
		setTheme((prev) => (prev === "dark" ? "light" : "dark"))

	const addCity = (city) => {
		setCities((prev) => {
			const prevCities = prev.map((city) => city.toLowerCase())
			const updated = new Set([...prevCities, city.toLowerCase()])
			return [...updated]
		})
	}
	const removeCity = (city) => {
		if (selectedCity && city.toLowerCase() === selectedCity.toLowerCase())
			setSelectedCity(null)

		setCities((prev) => {
			return prev.filter(
				(prevCity) => prevCity.toLowerCase() !== city.toLowerCase()
			)
		})
	}

	const fetchWeatherData = async (cityName) => {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
		)
		return await response.json()
	}

	const value = {
		theme,
		cities,
		selectedCity,
		toggleTheme,
		addCity,
		removeCity,
		setSelectedCity,
		fetchWeatherData
	}
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
