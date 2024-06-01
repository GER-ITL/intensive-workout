import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './router.data'

const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						></Route>
					)
				})}

				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
