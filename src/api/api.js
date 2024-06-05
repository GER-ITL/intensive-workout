import axios from 'axios'
import Cookies from 'js-cookie'
export const $axios = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : '',
	},
})
