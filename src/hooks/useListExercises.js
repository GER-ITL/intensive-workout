import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../services/exercise/exercise.service'

const useListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),
	})

export default useListExercises
