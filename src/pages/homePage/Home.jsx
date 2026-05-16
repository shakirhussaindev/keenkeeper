import React from 'react';
import Banner from '../../components/homePage/Banner';
import Friends from '../../components/homePage/friends/Friends';

const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner />
      <Friends />
    </div>
  );
};

export default Home;