import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

function User() {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            <h3>User Detail</h3>
            {loading && <div>Loading...</div>}
            {
                !loading && <code>{JSON.stringify(user)}</code>

            }
            <br />
            <br />
            {parseInt(id) < 10 ? (
                <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
            ) : (
                <h4>Başka Kullanıcı Yok</h4>
            )}
        </div>
    )
}

export default User
