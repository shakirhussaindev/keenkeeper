import React from 'react';

const FriendsCard = ({friend}) => {

  const { name, picture, days_since_contact, status, tags } = friend

  return (
    <div className="p-6 bg-white rounded-md shadow-md flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="pb-3">
        <img src={picture} alt="" className="rounded-full w-20" />
      </div>
      <h4 className="text-xl font-semibold color1">{name}</h4>
      <p className="py-2 text-xs text-gray-500">{days_since_contact}d ago</p>
      <div className="flex items-center gap-2 mb-2">
        {tags.map((tag, i) => (
          <p
            key={i}
            className="text-xs font-medium bg-green-200 text-green-900 py-1 px-2 rounded-2xl"
          >
            {tag}
          </p>
        ))}
      </div>
      <p
        className={`${
          (status === "on-track" && "bg-green-900") ||
          (status === "almost due" && "bg-yellow-500") ||
          (status === "overdue" && "bg-red-500")
        } text-white text-xs font-medium py-1 px-2 rounded-3xl`}
      >
        {status}
      </p>
    </div>
  );
};

export default FriendsCard;