import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../auth/Auth.module.scss'
import SelectExercises from './SelectExercises'
const NewWorkout = () => {
	const { register, handleSubmit, formState, control } = useForm({
		mode: 'onChange',
	})
	const errorReq = formState.errors?.name?.message
	const errorMaxL = formState.errors?.name?.type

	// const { isSuccess, error, isLoading, mutate } = useMutation({
	// 	queryKey: ['create workout'],
	// 	queryFn: body => WorkoutService.create(body),
	// 	onSuccess() {
	// 		reset()
	// 	},
	// })
	const onSubmit = data => {
		// console.log(data)
		// mutate(data)
	}
	return (
		<Layout bgImage='/public/images/new-workout-bg.jpg'>
			<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
				<h1>Create New Workout</h1>
				<input
					type='text'
					placeholder='name'
					{...register('name', {
						required: 'Name field required',
						maxLength: 10,
					})}
				/>
				<Link to='/new-exercise' className='dark-link'>
					Add new exercise
				</Link>
				{errorReq && <span>{errorReq}</span>}
				{errorMaxL === 'maxLength' && <span>Max length 10</span>}
				<SelectExercises control={control} />
				<Button>Create</Button>
			</form>
		</Layout>
	)
}

export default NewWorkout
