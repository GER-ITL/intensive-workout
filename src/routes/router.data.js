import Auth from '../components/screens/auth/Auth'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/workouts/detail/Workout'
import ListWorkouts from '../components/screens/workouts/list/ListWorkouts'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false,
	},
	{
		path: '/auth',
		component: Auth,
		auth: false,
	},

	{
		path: '/new-workout',
		component: NewWorkout,
		auth: false,
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		auth: false,
	},
	{
		path: '/profile',
		component: Profile,
		auth: false,
	},
	{
		path: '/workout/:id',
		component: Workout,
		auth: false,
	},
	{
		path: '/workout',
		component: ListWorkouts,
		auth: false,
	},
	{
		path: '/exercise/: id',
		component: ExerciseLog,
		auth: false,
	},
]
