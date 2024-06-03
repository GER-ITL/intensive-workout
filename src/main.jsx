import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Router from './routes/Router.jsx'

const AuthContext = createContext({})
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <AuthContext.Provider value={isAuth}> */}
		<Router />
		{/* </AuthContext.Provider> */}
	</React.StrictMode>
)
