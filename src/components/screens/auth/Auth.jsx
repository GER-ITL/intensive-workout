import { useAuthPage } from '../../../hooks/useAuthPage'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'

const Auth = () => {
	const { errors, onSubmit, isLoading, register, setType, handleSubmit } =
		useAuthPage()
	return (
		<Layout bgImage='/images/auth-bg.png'>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
				<h1>AUTH || REGISTER</h1>
				{isLoading && <Loader />}
				<input
					{...register('email', {
						required: 'Email is required',
					})}
					type='email'
					placeholder='email...'
				/>
				{errors?.email && <span>Email field is required</span>}
				<input
					{...register('password', {
						required: 'Password is required',
					})}
					type='password'
					placeholder='password...'
				/>
				{errors?.password && <span>Password field is required</span>}
				<div className={styles.wrapperBtn}>
					<Button clickHandler={() => setType('login')}>SignIn</Button>
					<Button clickHandler={() => setType('reg')}>Register</Button>
				</div>
			</form>
		</Layout>
	)
}
export default Auth
