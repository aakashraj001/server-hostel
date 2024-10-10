import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CardSection from './components/assigned/CardSection';
// import FilterSection from './components/assigned/FilterSection';

// Sample JSON data
const data = {
  rooms: [
    {
      type: '6 Bedded Bunker',
      floor: '07',
      hostel: 'H1',
      beds: [
        { number: 101, status: 'occupied' },
        { number: 102, status: 'occupied' },
        { number: 103, status: 'occupied' },
        { number: 104, status: 'occupied' },
        { number: 105, status: 'available' },
        { number: 106, status: 'available' },
      ],
    },
    {
      type: '6 Bedded Bunker',
      floor: '07',
      hostel: 'H1',
      beds: [
        { number: 107, status: 'occupied' },
        { number: 108, status: 'occupied' },
        { number: 109, status: 'available' },
        { number: 110, status: 'available' },
      ],
    },
  ],
};

const Assigned = () => {
  return (
    <div className="p-5">
      <div className="gap-5 flex flex-col pb-5">
        <div className="flex items-center bg-fourth w-full md:w-[20vw] h-14 rounded-lg text-white">
          <SearchIcon className="ml-4 text-white" />
          <input className="bg-transparent w-full h-full pl-4 outline-none text-white" placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 pb-5">
        <select className="bg-fourth text-white p-2 rounded-md">
          <option value="all">Room Types</option>
          <option value="6-bedded-bunker">6 Bedded Bunker</option>
          {/* Add more options as needed */}
        </select>
        <select className="bg-fourth text-white p-2 rounded-md">
          <option value="all">Hostels</option>
          <option value="h1">H1</option>
          {/* Add more options as needed */}
        </select>
        <select className="bg-fourth text-white p-2 rounded-md">
          <option value="all">Floors</option>
          <option value="07">07</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.rooms.map((room, index) => (
          <CardSection key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Assigned;
