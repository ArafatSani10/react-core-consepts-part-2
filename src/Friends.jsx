import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Friends(){

    let [friend, setFriends] = useState([]);
    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends : {friend.length}</h3>
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}