import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';

const TimeLine = () => {
  const { timeline} = useContext(FriendsContext);

  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [search, setSearch] = useState("");

  const filteredTimeline = timeline
    .filter((item) => {
      const matchFilter = filter === "all" ? true : item.type === filter;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      return matchFilter && matchSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.time) - new Date(a.time);
      } else {
        return new Date(a.time) - new Date(b.time);
      }
    });


  return (
    <div className="geist bg-[#F8FAFC] lg:p-20 md:p-15 p-10">
      <div className="w-8/12 mx-auto">
        <h2 className="text-[clamp(1.5rem,3vw,3rem)] font-bold color1">
          Timeline
        </h2>

        <div className="flex gap-4 items-center my-6 justify-between">
          <div className='space-x-3'>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-zinc-200 outline-none p-2 rounded-md"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-zinc-200 outline-none p-2 rounded-md"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <input
            type="search"
            placeholder="Search by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-zinc-200 outline-none p-2 rounded-md "
          />
        </div>

        <div className="space-y-6">
          {filteredTimeline.map((time) => (
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
                <h3 className="pb-1">
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