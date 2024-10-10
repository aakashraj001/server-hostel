// import ThemeSwitcher from "../../logic/functions";

import React from 'react';
import Hostel from './components/occupancy/hostel';
import SearchIcon from '@mui/icons-material/Search';

const Occupancy = () => {
  const hostelData = [
    {
      id: 1,
      name: 'Hostel 1',
      occupancy: 50,
      totalRooms: 458,
      totalBeds: 458,
      occupiedRooms: 58,
      floors: 3,
      students: 6582,
      inHostel: 1569,
      outsideHostel: 2500,
      furniture: {
        'Ceiling Fan': 50,
        'Center Table': 12,
        Chairs: 123,
        Refrigerator: 6,
        Kettle: 12,
      },
    },
    {
      id: 2,
      name: 'Hostel 2',
      occupancy: 75,
      totalRooms: 458,
      occupiedRooms: 58,
      floors: 3,
      students: 6582,
      inHostel: 1569,
      outsideHostel: 2500,
      furniture: {
        'Ceiling Fan': 50,
        'Center Table': 12,
        Chairs: 123,
        Refrigerator: 6,
        Kettle: 12,
      },
    },
    {
      id: 3,
      name: 'Hostel 3',
      occupancy: 60,
      totalRooms: 458,
      occupiedRooms: 58,
      floors: 3,
      students: 6582,
      inHostel: 1569,
      outsideHostel: 2500,
      furniture: {
        'Ceiling Fan': 50,
        'Center Table': 12,
        Chairs: 123,
        Refrigerator: 6,
        Kettle: 12,
      },
    },
  ];

  return (
    <div>
      <div className="gap-5 flex flex-col pb-5">
        <div className="flex items-center bg-fourth w-[20vw] h-14 rounded-lg text-white">
          <SearchIcon className="ml-4 text-white" />
          <input className="bg-transparent w-full h-full pl-4 outline-none text-white" placeholder="Search..." type="text" />
        </div>
        <div className="flex place-content-between w-[20vw]">
          <div className="bg-fourth w-[10vw] h-10 flex items-center justify-center text-white rounded-lg">
            {' '}
            Total Hostel: {hostelData.length}
          </div>
          <button className="bg-cblue w-[8vw] rounded-lg">Add Rooms</button>
        </div>
      </div>
      {hostelData.map((hostel, index) => (
        <Hostel key={index} hostel={hostel} />
      ))}
    </div>
  );
};

export default Occupancy;
