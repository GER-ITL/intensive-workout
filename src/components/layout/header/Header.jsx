import { ArrowLeft, User } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Hamb from './Hamb'
import styles from './Header.module.scss'
const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header} ref={ref}>
			{pathname !== '/' ? (
				<button aria-label='Go back'>
					<ArrowLeft onClick={() => navigate(backLink)} />
				</button>
			) : (
				<button
					aria-label='Go to profile'
					onClick={() => navigate(isAuth ? '/auth' : '/profile')}
				>
					<User />
				</button>
			)}
			<button>
				<Hamb isShow={isShow} setIsShow={setIsShow} />
			</button>
		</header>
	)
}

export default Header
