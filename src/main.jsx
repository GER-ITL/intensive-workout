import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/index.scss'
import { menu } from './components/layout/header/menu.data.js'
import Home from './screens/home/Home.jsx'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},

	{
		path: menu[0].link,
		element: <div>Workout</div>,
	},
	{
		path: menu[1].link,
		element: <div> new Workout</div>,
	},
	{
		path: menu[2].link,
		element: <div>profile</div>,
	},
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
