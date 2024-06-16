import { $axios } from '../../api/api'

import { WORKOUTS } from '../services/workout/workout.service'

const LOG = `${WORKOUTS}/log`

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(workoutId) {
		return $axios.post(`${LOG}/${workoutId}`)
	}

	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
