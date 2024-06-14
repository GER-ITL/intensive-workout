import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import useListExercises from '../../../hooks/useListExercises'
const SelectExercises = ({ control }) => {
	const { data = [] } = useListExercises()
	console.log(data)
	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					isMulti
					title='Exercises'
					placeholder='Exercises...'
					classNamePrefix='select2-selection'
					options={
						// data.map(exercise => ({
						// 	value: exercise.id,
						// 	label: exercise.name,
						// }))
						[
							{ value: '1', label: 'Pull-ups' },
							{ value: '2', label: 'Squats' },
							{ value: '3', label: 'Push ups' },
						]
					}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	)
}

export default SelectExercises
