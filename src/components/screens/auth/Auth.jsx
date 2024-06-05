import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
const Auth = ({ isAuth }) => {
	const navigate = useNavigate()
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	return (
		<Layout bgImage='/images/auth-bg.png'>
			<form
				onSubmit={handleSubmit(data => console.log(data))}
				className={styles.wrapper}
			>
				<h1>AUTH || REGISTER</h1>
				{/* <Loader /> */}
				<input
					{...register('email', {
						required: 'Email is required',
					})}
					type='email'
					placeholder='email...'
				/>
				{errors?.email && <span>Email field is required</span>}
				<input
					{...register('password', {
						required: 'Password is required',
					})}
					type='password'
					placeholder='password...'
				/>
				{errors?.password && <span>Password field is required</span>}
				<div className={styles.wrapperBtn}>
					<Button clickHandler={() => setType('auth')}>SignIn</Button>
					<Button clickHandler={() => setType('reg')}>Register</Button>
				</div>
			</form>
		</Layout>
	)
}

export default Auth
