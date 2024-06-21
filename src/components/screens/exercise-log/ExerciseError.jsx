const ExerciseError = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map((error, index) =>
				error ? <div key={index}>{error}</div> : null
			)}
		</div>
	)
}

export default ExerciseError
