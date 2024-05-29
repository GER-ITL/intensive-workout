import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Hamb from './Hamb'
import styles from './Header.module.scss'
const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	const { isShow, setIsShow, ref } = useOnClickOutside(false)
	return (
		<header className={styles.header} ref={ref}>
			<button>
				<ArrowLeft />
				{/* <User /> */}
			</button>
			<button>
				<Hamb isShow={isShow} setIsShow={setIsShow} />
			</button>
		</header>
	)
}

export default Header
