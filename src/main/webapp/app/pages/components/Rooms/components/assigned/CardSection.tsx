import React from 'react';

const CardSection = ({ room }) => {
  return (
    <div className="bg-third p-5 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white">{room.type}</h3>
        <div className="flex space-x-2">
          <span className="text-gray-400">Floor No. {room.floor}</span>
          <span className="text-gray-400">Hostel {room.hostel}</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {room.beds.map(bed => (
          <div key={bed.number} className={`p-2 rounded-md text-center ${bed.status === 'occupied' ? 'bg-red-600' : 'bg-gray-700'}`}>
            {bed.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
