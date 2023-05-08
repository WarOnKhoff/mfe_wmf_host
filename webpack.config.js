const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies

require("dotenv").config()

const HOST_URL = process.env.HOST_URL || "http://localhost:8080"
const HEADER_URL = process.env.HEADER_URL || "http://localhost:3000"
const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://localhost:3001"
const DETAILS_URL = process.env.DETAILS_URL || "http://localhost:3002"

module.exports = (_, argv) => ({
	output: {
		publicPath: `${HOST_URL}/`
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
	},
	devServer: {
		port: 8080,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.m?js/,
				type: "javascript/auto",
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "host",
			filename: "remoteEntry.js",
			remotes: {
				host: `host@${HOST_URL}/remoteEntry.js`,
				header: `header@${HEADER_URL}/remoteEntry.js`,
				dashboard: `dashboard@${DASHBOARD_URL}/remoteEntry.js`,
				details: `details@${DETAILS_URL}/remoteEntry.js`
			},
			exposes: {
				"./store": "./src/store"
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"]
				}
			}
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html"
		})
	]
})
