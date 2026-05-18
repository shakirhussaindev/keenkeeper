import React from 'react';
import { useParams } from 'react-router';
import useFriend from '../../hooks/useFriend';

const FriendDetails = () => {
  const {id} = useParams()
  console.log(id,'id')

  const { friends, loader } = useFriend()

 
  // console.log(frnds)
  const expectedFrnd = friends?.find((fr) => fr.id === Number(id))
  console.log(expectedFrnd)
  return (
    <div>
      friend details
    </div>
  );
};

export default FriendDetails;