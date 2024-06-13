import React from 'react'
import { useNewExercise } from '../../../hooks/useNewExercise'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../auth/Auth.module.scss'
const NewExercise = () => {
	const { register, onSubmit, handleSubmit } = useNewExercise()
	return (
		<Layout bgImage='/public/images/new-exercise-bg.jpg'>
			<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
				<h1>Create New Exercise</h1>
				<input {...register('name')} placeholder='name...' type='text' />
				<input
					{...register('times', {
						valueAsNumber: true,
						validate: value => {
							value > 0 || 'Times must be number'
						},
					})}
					placeholder='times...'
					type='text'
				/>
				<Button>Create</Button>
			</form>
		</Layout>
	)
}

export default NewExercise
