import Loader from '../../../ui/Loader'

import Layout from '../../../layout/Layout'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkouts()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && <h2>Workouts not found</h2>}
			</div>
		</>
	)
}

export default ListWorkouts
