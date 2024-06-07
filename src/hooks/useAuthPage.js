import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from './../services/auth.service'
import { useAuth } from './useAuth'
export const useAuthPage = () => {
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const { mutate, reset, isPending, isLoading } = useMutation({
		queryKey: ['auth'],
		queryFn: ({ email, password }) => AuthService.main(email, password, type),
		onSuccess() {
			setIsAuth(true)
		},
	})

	const onSubmit = data => {
		console.log(data)
		mutate(data, {
			isPending,
			reset,
		})
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
		}),

		[errors, isLoading]
	)
}
