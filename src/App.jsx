import { useEffect, useState } from 'react'
import UserCard from './Components/UserCard/UserCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [users, setUsers] = useState([])
  const [search, setsearch] = useState('')

  async function getData() {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonRs = await rs.json()
    const dataRs = jsonRs.map(carUser => ({
      id: carUser.id,
      name: carUser.name,
      username: carUser.username,
      email: carUser.email
    }))

    setUsers(dataRs)
  }

  useEffect(() => {
    getData()
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='App'>
      <div className='container'>
        <div className='search-user'>
          <div className='buscar'>
          <input type='text'placeholder='Buscar usuarios...' value={search} className='userSearch'
          onChange={e => setsearch(e.target.value)}/>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
        <div className='users-grid'>
          {filteredUsers.map((user, index) => (
            <UserCard
              key={user.id + index}
              name={user.name}
              username={user.username}
              email={user.email}
              id={user.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}