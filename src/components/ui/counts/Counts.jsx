import React from 'react'
import styles from './Counts.module.scss'
import { counts } from './counts.data'
const Counts = () => {
	return (
		<div className={styles.wrapper}>
			{counts.map(count => {
				return (
					<div>
						<h5>{count.title}</h5>
						<p>{count.value}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Counts
