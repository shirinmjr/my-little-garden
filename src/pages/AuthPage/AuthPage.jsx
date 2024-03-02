import './AuthPage.css'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [username, setUsername] = useState('')

    function handleChange(evt) {
        setUsername(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setUser(username)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} required />
                <button type='submit'>LOG IN</button>
            </form>
        </div>
    )
}