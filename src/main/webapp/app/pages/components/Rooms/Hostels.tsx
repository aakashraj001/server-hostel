import React from 'react';
import HostelCard from './components/hostels/hostelCard';
import SearchIcon from '@mui/icons-material/Search';

interface Hostel {
  hostelName: string;
  address: string;
  totalRooms: number;
  occupiedRooms: number;
  floors: number;
  students: number;
  inHostel: number;
  expectedCollection: number;
  collectedAmount: number;
  remainingAmount: number;
  overdueAmount: number;
  furniture: {
    [key: string]: number;
  };
}

const hostelData: Hostel[] = [
  {
    hostelName: 'Hostel 1',
    address: 'Plot number 206, Tihi Nagar, Main Hawal Sadak, Jaipur-Rajasthan-302021 India',
    totalRooms: 458,
    occupiedRooms: 58,
    floors: 3,
    students: 4785,
    inHostel: 846,
    expectedCollection: 391463,
    collectedAmount: 751608,
    remainingAmount: 4597,
    overdueAmount: 1565852,
    furniture: {
      'Ceiling Fan': 50,
      'Center Table': 12,
      Chairs: 123,
      Refrigerator: 6,
      Kettle: 12,
    },
  },
  {
    hostelName: 'Hostel 2',
    address: '123 Main Street, Anytown, CA 90210',
    totalRooms: 280,
    occupiedRooms: 112,
    floors: 4,
    students: 3210,
    inHostel: 678,
    expectedCollection: 284352,
    collectedAmount: 421569,
    remainingAmount: 137217,
    overdueAmount: 895412,
    furniture: {
      'Ceiling Fan': 35,
      'Study Desk': 80,
      Chair: 160,
      Microwave: 4,
      'Water Dispenser': 3,
    },
  },
  {
    hostelName: 'Hostel 3',
    address: 'Block A, University Road, New City, UK',
    totalRooms: 325,
    occupiedRooms: 78,
    floors: 5,
    students: 2548,
    inHostel: 512,
    expectedCollection: 412789,
    collectedAmount: 187456,
    remainingAmount: 225333,
    overdueAmount: 987123,
    furniture: {
      'Bunk Bed': 150,
      Wardrobe: 75,
      Chair: 150,
      'Washing Machine': 2,
      'Ironing Board': 5,
    },
  },
];

const HostelList: React.FC = () => {
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
        <HostelCard key={index} hostel={hostel} />
      ))}
    </div>
  );
};

export default HostelList;
