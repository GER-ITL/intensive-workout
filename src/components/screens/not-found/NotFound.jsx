import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
const NotFound = () => {
	const { isAuth } = useAuth()
	const nav = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			nav('/auth')
		}
	}, [])
	return <Layout bgImage='/public/images/not-found-bg.jpg'></Layout>
}

export default NotFound
