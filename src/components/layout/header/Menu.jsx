import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hamb.module.scss'
import { menu } from './menu.data'
const Menu = ({ isShow, handleLogout }) => {
	return (
		<nav>
			<ul
				className={clsx(styles.menu, {
					[styles.show]: isShow,
				})}
			>
				{menu.map(item => {
					return (
						<li key={item.link}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					)
				})}
				<li>
					<button onClick={handleLogout} className={styles.logout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
