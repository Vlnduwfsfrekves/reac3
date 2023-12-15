import React from 'react'
import FriendListItem from './FriendListItem'
const FriendList=({friends}) => {
    console.log(...friends);
    return (
    <ul className='friends-ul'>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
    )
}
export default FriendList