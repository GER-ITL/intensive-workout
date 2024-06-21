import { User } from 'lucide-react'
import React from 'react'
import Layout from '../../layout/Layout'
import Counts from '../../ui/counts/Counts'
import styles from './Profile.module.scss'
const Profile = () => {
	return (
		<>
			<Layout bgImage='/public/images/profile-bg.jpg'>
				<div className={styles.wrapperUser}>
					<User className={styles.user} />
					<h2>Daniel</h2>
				</div>
				<Counts />
				<div className={styles.images}>
					<div>
						<h3>Before</h3>
						<img src='/public/images/before.jpg' alt='before' />
					</div>
					<div>
						<h3>After</h3>
						<img src='/public/images/after.jpg' alt='after' />
					</div>
				</div>
				<div className={styles.other}></div>
			</Layout>
		</>
	)
}

export default Profile
