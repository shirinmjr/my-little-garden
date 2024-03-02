import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <div>
            NavBar
            <Link to={'/'}>All Plants</Link>
        </div>
    )
}