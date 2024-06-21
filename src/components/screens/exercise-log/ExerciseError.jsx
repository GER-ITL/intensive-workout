const ExerciseError = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map((error, index) =>
				error ? <div key={error + index}>{error}</div> : null
			)}
		</div>
	)
}

export default ExerciseError
