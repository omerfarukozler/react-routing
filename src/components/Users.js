import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])
    console.log("users:", users)
    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users
