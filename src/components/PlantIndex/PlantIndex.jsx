import './PlantIndex.css'
import { Link } from 'react-router-dom'

export default function PlantIndex() {

    return (
        <div>
            PlantIndex
            <ul>
                <li>
                    <Link to='/PlantA'>Plant A</Link>
                </li>
                <li>
                    <Link to='/PlantB'>Plant B</Link>
                </li>
                <li>
                    <Link to='/PlantC'>Plant C</Link>
                </li>
            </ul>
        </div>
    )
}