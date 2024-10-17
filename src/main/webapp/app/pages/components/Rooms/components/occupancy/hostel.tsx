import React from 'react';
import { Hostel as HostelType } from '../../interface/hostel.model';
import DoughnutChart from '../../../DoughnutChart';
import HomeIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface HostelProps {
  hostel: HostelType;
}

const Hostel: React.FC<HostelProps> = ({ hostel }) => {
  const firstchart = [50, 50];
  const firstcolor = ['#292929', '#00FFF5'];

  return (
    <div className="bg-baseOne place-content-between flex w-[70vw] text-white p-4 mb-4 rounded-lg">
      <div>
        <h2 className="text-xl font-bold">{hostel.name}</h2>
        <div className="mx-[3vw] my-[7vh]">
          <DoughnutChart dataprops={firstchart} colorprops={firstcolor} />
        </div>
      </div>
      <div className="grid grid-cols-3 auto-rows-min gap-[1vw]">
        <div className="flex flex-col bg-fifth w-[10vw] p-[10%] h-20 rounded-lg">
          <div>Total Rooms</div>
          <p>{hostel.totalRooms}</p>
        </div>
        <div className="flex flex-col bg-fifth w-[10vw] p-[10%] h-20 rounded-lg">
          <div>Occupied</div>
          <p>{hostel.occupiedRooms}</p>
        </div>
        <div className="flex flex-col bg-fifth w-[10vw] p-[10%] h-20 rounded-lg">
          <div>Floors</div>
          <p>{hostel.floors}</p>
        </div>
        <div className="col-span-3 place-content-between flex flex-row bg-fifth p-[10%] rounded-lg">
          <div>
            <p>Students:</p>
            <div>{hostel.students}</div>
          </div>
          <div>
            <p>In Hostel:</p>
            <div>{hostel.inHostel}</div>
          </div>
          <div>
            <p>Outside Hostel:</p>
            <div>{hostel.outsideHostel}</div>
          </div>
        </div>
      </div>
      <div className="w-[15vw] p-4 bg-fifth rounded-lg">
        <h3 className="font-bold text-white mb-4">Furniture</h3>
        <ul>
          {Object.keys(hostel.furniture).map(item => (
            <li key={item} className="flex justify-between rounded-lg w-[13vw] bg-secondary p-2 text-gray-300 mb-2">
              <span>{item}</span>
              <span>{hostel.furniture[item]}</span>
              <HomeIcon className="text-3xl" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hostel;
