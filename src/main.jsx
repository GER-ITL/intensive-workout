import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Router from './routes/Router.jsx'
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Home />,
// 	},

// 	{
// 		path: menu[0].link,
// 		element: <div>Workout</div>,
// 	},
// 	{
// 		path: menu[1].link,
// 		element: <div> new Workout</div>,
// 	},
// 	{
// 		path: menu[2].link,
// 		element: <div>profile</div>,
// 	},
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
