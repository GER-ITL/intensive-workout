import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
const NotFound = () => {
	return (
		<Layout>
			Page not found
			<Link to='/auth'>Auth</Link>
		</Layout>
	)
}

export default NotFound
