import React from "react";
import FriendsCard from "./FriendsCard";
import { CircleLoader } from "react-spinners";
import useFriend from "../../../hooks/useFriend";

const Friends = () => {
  const { friends, loader } = useFriend();

  return (
    <div className="w-8/12 mx-auto geist">
      <div className="border-t border-gray-500/20 ">
        <h3 className="text-2xl color1 font-semibold pt-6 pb-4">
          Your Friends
        </h3>
          {loader ? (
            <div className="flex justify-center items-center pt-20 pb-50">
              <CircleLoader color="#0D542B" />
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-10">
            {friends.map((friend) => (
              <FriendsCard key={friend.id} friend={friend} />
            ))}
        </div>
          )}
      </div>
    </div>
  );
};

export default Friends;
