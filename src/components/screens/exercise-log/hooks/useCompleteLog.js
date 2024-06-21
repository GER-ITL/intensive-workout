import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

// import  ExerciseLogService  from '../../../../services/exercise/exercise-log.service'

export const useCompleteLog = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation({
		queryKey: ['complete log'],
		queryFn: body => ExerciseLogService.complete(id, body),
	})

	return {
		completeLog: mutate,

		errorCompleted,
	}
}
