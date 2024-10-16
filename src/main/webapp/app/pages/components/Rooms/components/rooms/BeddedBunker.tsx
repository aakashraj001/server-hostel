import React from 'react';
import { RoomsProps } from '../../interface/rooms.model';
import DistributionChart from './DistribtuionChart';
import DonutChartwithData from './DonutChartwithData';
import HomeIcon from '@mui/icons-material/ArrowForwardIosRounded';

const BeddedBunker = ({ rooms }: RoomsProps) => {
  const distributionChart = [
    {
      color: '#CE1A1A',
      width: '25%',
    },
    {
      color: '#9747FF',
      width: '5%',
    },
    {
      color: '#00FFA3',
      width: '10%',
    },
    {
      color: '#FFE605',
      width: '10%',
    },
    {
      color: '#0094FF',
      width: '50%',
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3">
      {rooms.map((room, index) => (
        <div key={index} className="grid grid-cols-5 gap-3 bg-fourth  rounded-[10px] p-5">
          <div className=" col-span-2 flex flex-col gap-3">
            <div className="flex gap-3 ">
              <div>
                <img src="src\assets\images\BeddedBunkerlogo.svg" alt="loading" />
              </div>
              <div>
                <h1 className="text-PrimaryText font-semibold text-lg">6 Bedded Bunker</h1>
              </div>
              <div className="flex gap-1 border border-baseFour p-1">
                <img src="../../../../assets/images/editlogo.svg" alt="loading" />
                <h3 className="text-[16px] text-PrimaryText font-normal">Edit</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className=" flex flex-col gap-0.5 rounded-[10px]  bg-baseFive text-PrimaryText p-2">
                <h1 className="text-lg font-normal">Total Rooms</h1>
                <h1 className="text-2xl font-normal">{room.totalRooms}</h1>
              </div>
              <div className=" flex flex-col gap-0.5 rounded-[10px]  bg-baseFive text-PrimaryText p-2">
                <h1 className="text-lg font-normal">Rent Per Tenant</h1>
                <h1 className="text-2xl font-normal">₹{room.rentPerTenant}</h1>
              </div>
              <div className="  flex flex-col gap-0.5 rounded-[10px]  bg-baseFive text-PrimaryText p-2">
                <h1 className="text-lg font-normal">Tenanats</h1>
                <h1 className="text-2xl font-normal">{room.tenants}</h1>
              </div>
              <div className=" flex flex-col gap-0.5 rounded-[10px]  bg-baseFive text-PrimaryText p-2">
                <h1 className="text-lg font-normal">Furniture</h1>
                <h1 className="text-2xl font-normal">{room.furniture}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-PrimaryText text-[16px] font-normal">Distribution</h1>
              <DistributionChart props={distributionChart} />
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 gap-3 ">
            <div className="flex gap-2">
              <div className="flex gap-0.5 bg-baseFive px-1 py-0.5 rounded-[5px]">
                <img src="../../../../assets/images/hostellogo.svg" alt="loading" />
                <h1 className="text-PrimaryText font-[500px] text-[16px]">{room.hostelName}</h1>
              </div>
              <div className="flex gap-0.5 bg-baseFive px-1 py-0.5 rounded-[5px]">
                <img src="../../../../assets/images/floorlogo.svg" alt="loading" />
                <h1 className="text-PrimaryText font-[500px] text-[16px]">{room.floor}</h1>
              </div>
              <div className="flex gap-0.5 bg-baseFive px-1 py-0.5 rounded-[5px]">
                <img src="../../../../assets/images/userslogo.svg" alt="loading" />
                <h1 className="text-PrimaryText font-[500px] text-[16px]">{room.room}</h1>
              </div>
              <div className="flex gap-0.5 bg-baseFive px-1 py-0.5 rounded-[5px]">
                <img src="../../../../assets/images/sharingtypelogo.svg" alt="loading" />
                <h1 className="text-PrimaryText font-[500px] text-[16px]">{room.sharingTypes}</h1>
              </div>
            </div>
            <div className="bg-baseFive rounded-[10px]">
              <DonutChartwithData values={room.charts.values} />
            </div>
          </div>

          <div className="col-span-1">
            <div className="w-[15vw] p-4 bg-fifth rounded-lg">
              <h3 className="font-bold text-white mb-4">Furniture</h3>
              <ul>
                {room.Furniture.values.map((items, ind) => (
                  <li key={ind} className="flex justify-between rounded-lg w-[13vw] bg-secondary p-2 text-gray-300 mb-2">
                    <span>{items.item}</span>
                    <span>{items.count}</span>
                    <HomeIcon className="text-3xl" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeddedBunker;
