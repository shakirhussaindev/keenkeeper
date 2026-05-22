import React from "react";
import { useParams } from "react-router";
import useFriend from "../../hooks/useFriend";
import { GoMail } from "react-icons/go";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchiveBold } from "react-icons/pi";
import Calling from "../../assets/calling.png";
import Chat from "../../assets/chat.png";
import Camera from "../../assets/camera.png";
import { ClimbingBoxLoader } from "react-spinners";


const FriendDetails = () => {
  const { id } = useParams();
  // console.log(id,'id')

  const { friends, loader } = useFriend();

  // console.log(friends)

  const expectedFrnd = friends?.find((fr) => fr.id === Number(id));
  console.log(expectedFrnd);

  return (
    <div className="bg-[#F8FAFC] geist">
      <div className="w-8/12 mx-auto">
        {loader ? (
          <div className="flex justify-center items-center pt-20 pb-50">
            <ClimbingBoxLoader color="#0D542B" />
          </div>
        ) : (
          <div className="p-6 grid lg:grid-cols-3 gap-6">
            {/* Left side */}
            <div className="">
              <div className="bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
                <img
                  src={expectedFrnd.picture}
                  alt={expectedFrnd.name}
                  className="rounded-full w-20"
                />
                <h2 className="text-xl font-semibold color1 pt-3 pb-2">
                  {expectedFrnd.name}
                </h2>
                <p
                  className={`${
                    (expectedFrnd.status === "on-track" && "bg-green-900") ||
                    (expectedFrnd.status === "almost due" && "bg-yellow-500") ||
                    (expectedFrnd.status === "overdue" && "bg-red-500")
                  } text-white text-xs font-medium py-1 px-2 rounded-3xl mb-2`}
                >
                  {expectedFrnd.status}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {expectedFrnd.tags.map((tag, i) => (
                    <p
                      key={i}
                      className="text-xs font-medium bg-green-200 text-green-900 py-1 px-2 rounded-2xl"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <p className="inter text-base text-gray-500 italic pb-3 text-center font-medium">
                  "{expectedFrnd.bio}"
                </p>
                <p className="text-md text-gray-500 flex items-center gap-2">
                  <GoMail className="text-lg text-green-600" />{" "}
                  <span className="underline">{expectedFrnd.email}</span>
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow text-center mt-4 mb-2 flex justify-center cursor-pointer">
                <button className="text-base font-semibold flex items-center gap-2 justify-center cursor-pointer">
                  <RiNotificationSnoozeLine className="text-lg" />
                  Snooze 2 weeks
                </button>
              </div>
              <div className="bg-white p-4 rounded-md shadow text-center mt-4 mb-2 flex justify-center cursor-pointer">
                <button className="text-base font-semibold flex items-center gap-2 justify-center cursor-pointer">
                  <PiArchiveBold className="text-lg" />
                  Archive
                </button>
              </div>
              <div className="bg-white p-4 rounded-md shadow flex justify-center mt-4 cursor-pointer text-red-500">
                <button className="text-base font-semibold flex items-center gap-2 justify-center cursor-pointer">
                  <RiDeleteBinLine className="text-xl" />
                  Delete
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center py-8 bg-white rounded-md shadow-md">
                  <p className="text-[clamp(1.5rem,2vw,1.8rem)] color2 font-semibold pb-2">
                    {expectedFrnd.days_since_contact}
                  </p>
                  <p className="text-lg text-gray-500">Days Since Contact</p>
                </div>
                <div className="text-center py-8 bg-white rounded-md shadow-md">
                  <p className="text-[clamp(1.5rem,2vw,1.8rem)] color2 font-semibold pb-2">
                    {expectedFrnd.goal}
                  </p>
                  <p className="text-lg text-gray-500">Goal (Days)</p>
                </div>
                <div className="text-center py-8 bg-white rounded-md shadow-md">
                  <p className="text-[clamp(1.5rem,2vw,1.8rem)] color2 font-semibold pb-2">
                    {expectedFrnd.next_due_date}
                  </p>
                  <p className="text-lg text-gray-500">Next Due</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 my-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold color2 pb-4">
                    Relationship Goal
                  </h3>
                  <button className="btn btn-soft color1">Edit</button>
                </div>
                <p className="text-gray-500 text-lg">
                  Connect every{" "}
                  <span className="font-bold color1">
                    {expectedFrnd.goal} days
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 ">
                <h4 className="text-xl font-medium color2 pb-4">
                  Quick Check-In
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <button className="btn flex flex-col h-auto p-4">
                    <img src={Calling} alt="" />
                    <p className="text-lg color1 pt-2">Call</p>
                  </button>
                  <button className="btn flex flex-col h-auto p-4">
                    <img src={Chat} alt="" />
                    <p className="text-lg color1 pt-2">Text</p>
                  </button>
                  <button className="btn flex flex-col h-auto p-4">
                    <img src={Camera} alt="" />
                    <p className="text-lg color1 pt-2">Video</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendDetails;
