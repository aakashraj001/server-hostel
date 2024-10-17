import React from 'react';

interface HostelDetailProps {
  hostel: {
    totalRooms: number;
    occupiedRooms: number;
    expectedCollection: number;
    collectedAmount: number;
  };
}

const HostelDetail: React.FC<HostelDetailProps> = ({ hostel }) => {
  const occupancyRate = (hostel.occupiedRooms / hostel.totalRooms) * 100;

  return (
    <div className="w-1/2 flex justify-between items-center">
      <div className="text-center">
        <div className="text-lg font-bold">{occupancyRate.toFixed(2)}%</div>
        <div className="text-sm">Occupancy</div>
      </div>
      <div className="w-12 h-12">
        <svg className="radial-progress" viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0-31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="4"
          />
          <path
            className="circle"
            strokeDasharray={`${occupancyRate}, 100`}
            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0-31.831"
            fill="none"
            stroke="#00ff00"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default HostelDetail;
