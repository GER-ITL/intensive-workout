import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
const Auth = () => {
	const navigate = useNavigate()
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const { mutate, isPending } = useMutation({
		queryKey: ['auth'],
		queryFn: ({ email, password }) => AuthService.main(email, password, type),
		onSuccess(data) {
			console.log(data)
		},
	})

	const onSubmit = data => {
		console.log(data)
		mutate(data, {
			isPending,
		})
	}

	return (
		<Layout bgImage='/images/auth-bg.png'>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
				<h1>AUTH || REGISTER</h1>
				{/* {isLoading && <Loader />} */}
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
					<Button clickHandler={() => setType('login')}>SignIn</Button>
					<Button clickHandler={() => setType('reg')}>Register</Button>
				</div>
			</form>
		</Layout>
	)
}

export default Auth
