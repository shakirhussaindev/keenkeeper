import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FriendsContext } from "../../context/FriendsContext";
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {

  const { timeline } = useContext(FriendsContext);
  // console.log(timeline.length)
  
  const callCount = timeline.filter(item => item.type === 'call').length
  const textCount = timeline.filter(item => item.type === 'text').length
  const videoCount = timeline.filter(item => item.type === 'video').length
  console.log("all count",callCount,textCount,videoCount)

  const data = {
    labels: ["Text", "Call", "Video"],
    datasets: [
      {
        data: [callCount,textCount,videoCount],

        backgroundColor: [
          "#7C3AED", // purple
          "#1F4D45", // dark green
          "#39B26B", // green
        ],

        borderWidth: 0,
        borderRadius: 12,
        spacing: 6,
        cutout: "72%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 8,
          boxHeight: 8,
        },
      },

      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-[#F8FAFC] md:py-20 py-12 geist">
      <div className="w-8/12 mx-auto">
        <h2 className="text-[clamp(1.5rem,3vw,3rem)] font-bold color1 pb-6">
          Friendship Analytics
        </h2>

        <div className="p-8 bg-white rounded-md shadow-[0_0_5px_rgba(0,0,0,0.05)]">
          <h4 className="text-lg font-medium color2 pb-6">
            By Interaction Type
          </h4>

          {timeline.length === 0 ? (
            <div>
              <h4 className="text-center text-xl font-medium text-gray-500">
                No interaction with your friend at this moment.
              </h4>
              
            </div>
          ) : (
            <div className="w-full h-80 flex items-center justify-center">
              <Doughnut data={data} options={options} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
