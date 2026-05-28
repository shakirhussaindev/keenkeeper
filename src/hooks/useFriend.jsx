import React, { useEffect, useState } from 'react';

const useFriend = () => {
  const [friends, setFriends] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const frndsData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoader(false);
      }, 1000);
    };
    frndsData();
  }, []);
  return {friends,loader};
};

export default useFriend;