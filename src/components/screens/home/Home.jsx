import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Counts from '../../ui/counts/Counts'
import styles from './Home.module.scss'
const Home = () => {
	const navigate = useNavigate()
	return (
		<>
			<Layout bgImage='/images/home-bg.jpg'>
				<Button clickHandler={() => navigate('/new-workout')}>New</Button>
				<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
				<Counts />
			</Layout>
		</>
	)
}

export default Home
