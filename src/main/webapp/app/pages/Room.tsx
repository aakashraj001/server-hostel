import DashBoardSidebar from '../pages/components/DashBoardSidebar';
import { Route, Routes } from 'react-router-dom';
// import Analytics from "../components/Dashboard/Analytics";
// import Students from "../components/Dashboard/Students";
import Occupancy from '../pages/components/Rooms/Occupancy';
import HostelList from '../pages/components/Rooms/Hostels';
import Room from '../pages/components/Rooms/Rooms';
import Assigned from '../pages/components/Rooms/Assigned';
import React from 'react';
// import Hostels from "../components/Rooms/Hostels";

const DashBoard = () => {
  const sidebarDetails = [
    {
      image: 'src/assets/images/dashboard1.svg',
      title: 'Occupancy',
      path: '',
    },
    {
      image: 'src/assets/images/dashboard2.svg',
      title: 'Hostels',
      path: 'hostels',
    },
    {
      image: 'src/assets/images/dashboard3.svg',
      title: 'Rooms',
      path: 'roomDetail',
    },
    {
      image: 'src/assets/images/dashboard4.svg',
      title: 'Assigned',
      path: 'assigned',
    },
    {
      image: 'src/assets/images/dashboard5.svg',
      title: 'Furniture',
      path: 'furniture',
      disabled: true,
    },
  ];

  return (
    <div className=" w-full h-full grid grid-cols-12 gap-5  mt-[4rem]   dark:bg-[#111111]">
      <div className=" col-span-2  rounded-lg">
        <DashBoardSidebar props={sidebarDetails} />
      </div>
      <div className=" col-span-10 mt-[3rem]  ">
        <Routes>
          <Route index element={<Occupancy />} />
          <Route path="hostels" element={<HostelList />} />
          <Route path="roomDetail" element={<Room />} />
          <Route path="assigned" element={<Assigned />} />
          {/* <Route path='student' element={<Students />} /> */}
        </Routes>
      </div>

      {/* section 4 */}
    </div>
  );
};
export default DashBoard;
