import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../auth/Auth.module.scss'
const NewExercise = () => {
	const { register, handleSubmit, reset } = useForm()
	const onSubmit = data => {
		console.log(data)
		reset()
	}
	return (
		<Layout bgImage='/public/images/new-exercise-bg.jpg'>
			<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
				<h1>Create New Exercise</h1>
				<input {...register('name')} placeholder='name...' type='text' />
				<input {...register('times')} placeholder='times...' type='text' />
				<Button>Create</Button>
			</form>
		</Layout>
	)
}

export default NewExercise
