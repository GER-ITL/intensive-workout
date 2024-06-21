import { DoorClosed, MenuIcon } from 'lucide-react'
import React from 'react'
import styles from './Hamb.module.scss'
import Menu from './Menu'
const Hamb = ({ isShow, setIsShow }) => {
	return (
		<div className={styles.wrapper}>
			<button aria-label='Open menu' onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<button>
						<DoorClosed />
					</button>
				) : (
					<button>
						<MenuIcon />
					</button>
				)}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamb
