import { User } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Hamb from './Hamb'
import styles from './Header.module.scss'
const Header = () => {
	const { isAuth } = useAuth()
	const [isShow, setIsShow] = useState(false)
	return (
		<header className={styles.header}>
			<button>
				<User />
			</button>
			<button>
				<Hamb isShow={isShow} setIsShow={setIsShow} />
			</button>
		</header>
	)
}

export default Header
