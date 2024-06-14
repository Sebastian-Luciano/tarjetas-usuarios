import React from 'react'

export default function UserCard({name, username, email, id}) {
  return (
    <div className='card'>
        <div className='card-img'>
        <img src={`https://picsum.photos/200/300?random=${id}`} className='img-user' alt=''/>
        </div>
        <div className='card-body'>
            <h3>{name}</h3>
            <h5>{username}</h5>
            <h5>{email}</h5>
        </div>
    </div>
  )
}
