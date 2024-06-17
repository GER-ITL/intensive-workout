import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'
import workoutLogService from '../../../services/workout/workout-log.service'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Workout.module.scss'
const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => workoutLogService.getById(id),
		select: ({ data }) => data,
	})
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url('/images/workout-bg.jpg')`, height: 356 }}
		>
			<Header backLink='workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minute + 'min'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default Workout
