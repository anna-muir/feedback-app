import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <Card>
            <h1>About this project</h1>
            <p>This is a project for Udemy course.</p>
            <p><Link to='/'>Back to home</Link></p>
        </Card>

    )
}

export default About
