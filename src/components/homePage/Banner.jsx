import React from 'react';

const Banner = () => {
  const summery = [
    {
      num: 12,
      status: "Total Friends",
    },
    {
      num: 4,
      status: "On Track",
    },
    {
      num: 6,
      status: "Need Attention",
    },
    {
      num: 12,
      status: "Interactions This Month",
    },
  ];
  return (
    <div className="geist space-y-5 lg:pt-20 pt-10 mb-10">
      <h1 className="text-center text-[clamp(1.5rem,3vw,3rem)] font-bold geist">
        Friends to keep close in your life
      </h1>
      <p className="text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <div className="text-center">
        <button className="btn text-white bg-green-900">+ Add a Friend</button>
      </div>
      <div className="w-8/12 mx-auto grid lg:grid-cols-4 gap-6">
        {
          summery.map((sum,i)=> 
          <div key={i} className="p-8 bg-white text-center rounded-md shadow">
              <p className="pb-2 text-3xl font-semibold color1">{sum.num}</p>
              <p className="text-base text-gray-500">{sum.status}</p>
            </div>
          )
        }
        
      </div>
    </div>
  );
};

export default Banner;