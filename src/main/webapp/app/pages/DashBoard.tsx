import DashBoardSidebar from '../pages/components/DashBoardSidebar';
import { Route, Routes } from 'react-router-dom';
import Analytics from '../pages/components/Dashboard/Analytics';
import Students from '../pages/components/Dashboard/Students';
import React from 'react';

const DashBoard = () => {
  const sidebardetails = [
    {
      image: 'src/assets/images/dashboard1.svg',
      title: 'Analytics',
      path: '',
    },
    {
      image: 'src/assets/images/dashboard2.svg',
      title: 'Students',
      path: 'student',
    },
    {
      image: 'src/assets/images/dashboard3.svg',
      title: 'Complaints',
      path: 'complaints',
      disabled: true,
    },
    {
      image: 'src/assets/images/dashboard4.svg',
      title: 'Stock',
      path: 'Stock',
      disabled: true,
    },
    {
      image: 'src/assets/images/dashboard5.svg',
      title: 'Users',
      path: 'users',
      disabled: true,
    },
    {
      image: 'src/assets/images/dashboard6.svg',
      title: 'Meals',
      path: 'meals',
      disabled: true,
    },
  ];

  return (
    <div className=" w-full h-fit grid grid-cols-12 gap-3   dark:bg-[#111111]">
      <div className=" col-span-2  rounded-lg ">
        <DashBoardSidebar props={sidebardetails} />
      </div>
      <div className=" ml-[13.5vw] col-span-12 mt-[3.5vh] ">
        <Routes>
          <Route index element={<Analytics />} />
          <Route path="student" element={<Students />} />
        </Routes>
      </div>

      {/* section 4 */}
    </div>
  );
};
export default DashBoard;

//   import DashBoardSidebar from "../components/DashBoardSidebar";
//   import DoughnutChart from "../components/DoughnutChart";
//   import linklogo from '../assets/images/linklogo.svg';
//   import yellowlinklogo from '../assets/images/yellowlinklogo.svg';
//   import pinklinklogo from '../assets/images/pinklinklogo.svg';
//   import skylinklogo from '../assets/images/skylinklogo.svg';

//   const DashBoard=()=>{
//       const sidebardetails=[
//           {
//               "image":"src/assets/images/dashboard1.svg",
//               "title":"Analytics",
//               "path":"/"
//           },
//           {
//               "image":"src/assets/images/dashboard2.svg",
//               "title":"Students",
//               "path":"/student"
//           },
//           {
//               "image":"src/assets/images/dashboard3.svg",
//               "title":"Complaints",
//               "path":"/complaints"
//           },
//           {
//               "image":"src/assets/images/dashboard4.svg",
//               "title":"Stock",
//               "path":"/Stock"
//           },
//           {
//               "image":"src/assets/images/dashboard5.svg",
//               "title":"Users",
//               "path":"/users"
//           },
//           {
//               "image":"src/assets/images/dashboard6.svg",
//               "title":"Meals",
//               "path":"/meals"
//           }
//       ]
//        const firstchart=[50,50];
//        const firstcolor=['#292929','#00FFF5'];
//        const secondchart=[25,75];
//        const secondcolor=['#292929','#FFE605'];
//        const thirdchart=[5,95];
//        const thirdcolor=['#292929','#FF05C8'];
//        const fourchart=[19,50,28];
//        const fourcolor=['#FF05C8','#00FFF5','#FFE605']
//       return (
//           <div className=" grid grid-cols-12 gap-5  mt-[4rem]   dark:bg-[#111111]">
//               <div className=" mt-[1.5rem] col-span-2 ">
//               <DashBoardSidebar props={sidebardetails} />
//               </div>
//               <div className="col-span-7 grid grid-rows-textlinegrid gap-5  py-5 px-3 mt-[3rem] rounded-lg">
//               <div className="bg-[#202020] row-span-7">
//                <div className="flex gap-2 h-[15px] ">
//                   <h3 className=" text-white font-montserrat font-semibold text-xl">Occupancy</h3>
//                   <img src={linklogo} alt="loading" className="w-[12px] h-[12px] my-2.5" />
//                </div>
//               <div className=" grid  grid-cols-3 gap-9 ">
//                <div className="bg-[#111111]">
//               <div className="flex gap-2 py-3 px-2">
//                   <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 1</h3>
//                   <img src={linklogo} alt="loading" />
//               </div>
//               <div className="px-[2vw]">
//                <DoughnutChart dataprops={firstchart} colorprops={firstcolor} />
//                </div>
//                </div>
//                <div className="bg-[#111111]">
//               <div className="flex gap-2 py-3 px-2">
//                   <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 2</h3>
//                   <img src={linklogo} alt="loading" />
//               </div>
//               <div className="px-[2vw]">
//               <DoughnutChart dataprops={secondchart} colorprops={secondcolor} />
//                </div>
//                </div>
//                <div className="bg-[#111111]">
//               <div className="flex gap-2 py-3 px-2">
//                   <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 3</h3>
//                   <img src={linklogo} alt="loading" />
//               </div>
//               <div className="px-[2vw]">
//                <DoughnutChart dataprops={thirdchart} colorprops={thirdcolor} />
//                </div>
//                </div>
//                </div>
//                </div>

//                <div className="row-span-5 w-full border-2  bg-[#FFE605] ">
//                   <div className="flex gap-2 py-3 px-2">
//                   <h3 className="text-white font-montserrat text-lg font-semibold">Fees Collection</h3>
//                   <img src={linklogo} alt="loading" />
//                   </div>
//                   <div className="grid  grid-cols-6">
//                   <div className="px-5 col-span-2">
//                       <DoughnutChart dataprops={fourchart} colorprops={fourcolor} />
//                   </div>
//                   <div className="col-span-2 grid grid-rows-2">
//                       <div className="flex mx-4   my-4 gap-10 border-2 w-fit  px-6 py-1 rounded-md bg-[#111111] text-white">
//                           <div className="flex flex-col ">
//                           <h3 className="text-base font-normal">Expected</h3>
//                           <h2 className="text-2xl font-semibold" >&#8377; 52,00,000</h2>
//                           </div>
//                           <img src={linklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
//                       </div>

//                   <div className="col-span-2">
//                       <div className="flex mx-auto my-4 gap-11 border-2 w-fit  px-6 py-1 rounded-md bg-[#111111] text-white">
//                           <div className="flex flex-col ">
//                           <h3 className="text-base font-normal">Collected</h3>
//                           <h2 className="text-2xl text-[#00FFF5]  font-semibold" >&#8377; 26,00,000</h2>
//                           </div>
//                           <img src={skylinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
//                       </div>
//                   </div>
//                   </div>
//                   <div className="col-span-2 grid grid-rows-2">
//                   <div className="col-span-2">
//                       <div className="flex mx-auto my-4 gap-11 border-2 w-fit  px-6 py-1 rounded-md bg-[#111111] text-white">
//                           <div className="flex flex-col ">
//                           <h3 className="text-base font-normal">Remaining</h3>
//                           <h2 className="text-2xl font-semibold text-[#FFE605]" >&#8377; 15,60,000</h2>
//                           </div>
//                           <img src={yellowlinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
//                       </div>
//                   </div>
//                   <div className="col-span-2">
//                       <div className="flex mx-auto my-4 gap-11 border-2 w-fit  px-6 py-1 rounded-md bg-[#111111] text-white">
//                           <div className="flex flex-col ">
//                           <h3 className="text-base font-montserrat font-normal">Overdue</h3>
//                           <h2 className="text-2xl text-[#FF05C8] font-semibold" >&#8377; 10,40,000</h2>
//                           </div>
//                           <img src={pinklinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
//                       </div>
//                       </div>
//                   </div>

//                   </div>

//                </div>

//                <div className=" bg-[#202020] ">

//                       <div className="flex gap-2  px-5 py-3">
//                           <h3 className="text-xl text-white font-semibold font-montserrat">Complaints</h3>
//                           <img src={linklogo} alt="loading "/>
//                       </div>
//                       <div className="row-span-2 grid grid-flow-col gap-3">
//                       <div className="flex rounded-lg px-5">
//                           <div className="w-[10vw] h-[6.5vh] rounded-l-xl  bg-[#00FFF5]"></div>
//                           <div className="bg-[#FFE605] rounded-r-xl w-[6vw] h-[6.5vh]"></div>
//                       </div>

//                   <div className="px-1 border-2 rounded-lg">
//                       <div className="flex gap-2 px-3 py-1">
//                           <h3 className="text-base font-montserrat font-normal text-white">Total Complaints</h3>
//                           <img src={linklogo} alt="loading" />
//                       </div>
//                       <div className="text-white font-semibold text-2xl px-3">
//                           158
//                       </div>

//                   </div>
//                   <div className="px-8 border-2 rounded-lg">
//                       <div className="flex gap-2">
//                           <h3 className="text-base font-montserrat font-normal text-[#00FFF5]">Resolved</h3>
//                           <img src={linklogo} alt="loading" />
//                       </div>
//                       <div className="text-white font-semibold text-2xl">
//                           96
//                       </div>

//                   </div>
//                   <div className="px-9 border-2 rounded-lg mr-4">
//                       <div className="flex gap-2">
//                           <h3 className="text-base font-montserrat font-normal text-[#FFE605]">Open</h3>
//                           <img src={linklogo} alt="loading" />
//                       </div>
//                       <div className="text-white font-semibold text-2xl">
//                           62
//                       </div>

//                   </div>

//                </div>
//                </div>
//                </div>

//                <div className="text-white col-span-3 mt-[2rem]">
//                   jvksdjbvkdfjvbdkfdbhdfkjbdlhblfh
//                </div>

//           </div>
//       )
//   }
//   export default DashBoard;
