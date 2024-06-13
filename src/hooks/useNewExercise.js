import { useForm } from 'react-hook-form'

export const useNewExercise = () => {
	// const { isSuccess, error } = useMutation({
	// 	queryKey: ['create exercise'],
	// 	queryFn: body => ExerciseService.create(body),
	// })
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		if (data.name && data.times) console.log(data)
		// mutate(data)
		reset()
	}
	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
	}
}
