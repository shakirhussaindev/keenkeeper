import React, { use } from 'react';
import FriendsCard from './FriendsCard';

const friendsPromis = fetch('/friends.json').then(res => res.json())

const Friends = () => {
  const friends = use(friendsPromis)
  return (
    <div className='w-8/12 mx-auto geist'>
      <div className='border-t border-gray-500/20 '>
        <h3 className='text-2xl color1 font-semibold pt-6 pb-4'>Your Friends</h3>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-10'>
          {
            friends.map(friend => <FriendsCard key={friend.id} friend={friend}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Friends;