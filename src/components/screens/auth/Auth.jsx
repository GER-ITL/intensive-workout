import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
const Auth = ({ isAuth }) => {
	const navigate = useNavigate()
	return (
		<div className={styles.wrapper}>
			<h1>Authorization</h1>
			<input type='email' placeholder='email' />
			<input type='password' placeholder='password' />
			<Button clickHandler={() => navigate('/')}>Sign In </Button>
		</div>
	)
}

export default Auth
