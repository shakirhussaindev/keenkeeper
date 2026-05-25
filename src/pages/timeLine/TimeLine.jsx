import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';

const TimeLine = () => {
  const { timeline} = useContext(FriendsContext);
  return (
    <div className="geist bg-[#F8FAFC] lg:p-20 md:p-15 p-10">
      <div className="w-8/12 mx-auto">
        <h2 className="text-5xl font-bold color1">Timeline </h2>
        <div className="space-y-6">
          {timeline.map((time) => (
            <div className="bg-white p-4 rounded-md border border-[#dddddd] flex items-center gap-4">
              <div>
                <img
                  src={
                    (time.type === "call" && Call) ||
                    (time.type === "text" && Text) ||
                    (time.type === "video" && Video)
                  }
                  alt=""
                />
              </div>
              <div>
                <h3 className='pb-1'>
                  <span className="text-xl font-medium color2">
                    {(time.type === "call" && "Call") ||
                      (time.type === "text" && "Text") ||
                      (time.type === "video" && "Video")}
                  </span>
                  <span className="text-lg text-gray-500">
                    {" "}
                    with {time.name}
                  </span>
                </h3>
                <p className="text-lg text-gray-500">{time.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;