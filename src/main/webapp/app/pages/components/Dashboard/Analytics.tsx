import DoughnutChart from '../DoughnutChart';
import linklogo from '../../assets/images/linklogo.svg';
import yellowlinklogo from '../../assets/images/yellowlinklogo.svg';
import pinklinklogo from '../../assets/images/pinklinklogo.svg';
import skylinklogo from '../../assets/images/skylinklogo.svg';
import StudentUpdates from '../StudentUpdates';
import React from 'react';
// import emergencyicon from '../../assets/images/Emergencyicon.svg';

const Analytics = () => {
  const firstchart = [50, 50];
  const firstcolor = ['#292929', '#00FFF5'];
  const secondchart = [25, 75];
  const secondcolor = ['#292929', '#FFE605'];
  const thirdchart = [5, 95];
  const thirdcolor = ['#292929', '#FF05C8'];
  const fourchart = [19, 50, 28];
  const fourcolor = ['#FF05C8', '#00FFF5', '#FFE605'];
  return (
    <div className="grid grid-cols-10 gap-3 mt-[13.5vh] max-h-fit">
      <div className=" col-span-8 grid grid-rows-textlinegrid gap-3   rounded-lg">
        <div className="row-span-8 grid rounded-lg bg-[#202020]">
          <div className=" row-span-1   mx-6 my-3 flex gap-2 h-[15px] ">
            <h3 className=" text-white font-montserrat font-semibold text-xl">Occupancy</h3>
            <img src={linklogo} alt="loading" className="w-[12px] h-[12px] my-2.5" />
          </div>
          <div className=" row-span-7 mx-6 my-3  grid  grid-cols-3 gap-9">
            <div className="bg-[#111111] rounded-lg">
              <div className="flex gap-2 py-3 px-2">
                <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 1</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="mx-[3vw] my-[7vh]">
                <DoughnutChart dataprops={firstchart} colorprops={firstcolor} />
              </div>
            </div>
            <div className="bg-[#111111] rounded-lg">
              <div className="flex gap-2 py-3 px-2">
                <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 2</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="mx-[3vw] my-[7vh]">
                <DoughnutChart dataprops={secondchart} colorprops={secondcolor} />
              </div>
            </div>
            <div className="bg-[#111111] rounded-lg">
              <div className="flex gap-2 py-3 px-2">
                <h3 className="text-white font-montserrat text-lg font-semibold">Hostel 3</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="mx-[3vw] my-[7vh]">
                <DoughnutChart dataprops={thirdchart} colorprops={thirdcolor} />
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="row-span-6 w-full rounded-lg dark:bg-[#202020] ">
          <div className="flex gap-2 mx-6 my-3">
            <h3 className="text-white font-montserrat text-lg font-semibold">Fees Collection</h3>
            <img src={linklogo} alt="loading" />
          </div>
          <div className="grid  grid-cols-6">
            <div className="px-5 py-7 col-span-2">
              <DoughnutChart dataprops={fourchart} colorprops={fourcolor} />
            </div>
            <div className="col-span-2 grid grid-rows-2">
              <div className="flex mx-[3.5vw]  my-4 gap-28   w-fit h-fit py-3  px-6  rounded-md bg-[#111111] text-white">
                <div className="flex flex-col ">
                  <h3 className="text-base font-montserrat font-normal">Expected</h3>
                  <h2 className="text-2xl font-semibold whitespace-nowrap">&#8377; 52,00,000</h2>
                </div>
                <img src={linklogo} alt="loading" className="w-[22px] h-[22px] my-auto mr-3" />
              </div>

              <div className="col-span-2">
                <div className="flex mx-auto my-4 gap-28 w-fit h-fit py-3  px-6  rounded-md bg-[#111111] text-white">
                  <div className="flex flex-col ">
                    <h3 className="text-base font-montserrat font-normal">Collected</h3>
                    <h2 className="text-2xl text-[#00FFF5]  font-semibold">&#8377; 26,00,000</h2>
                  </div>
                  <img src={skylinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-rows-2">
              <div className="col-span-2">
                <div className="flex mx-auto my-4 gap-28 w-fit  px-6 h-fit py-3 rounded-md bg-[#111111] text-white">
                  <div className="flex flex-col ">
                    <h3 className="text-base font-montserrat font-normal">Remaining</h3>
                    <h2 className="text-2xl font-semibold text-[#FFE605]">&#8377; 15,60,000</h2>
                  </div>
                  <img src={yellowlinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex mx-auto my-4 gap-28 w-fit  px-6 h-fit py-3 rounded-md bg-[#111111] text-white">
                  <div className="flex flex-col ">
                    <h3 className="text-base font-montserrat font-normal">Overdue</h3>
                    <h2 className="text-2xl text-[#FF05C8] font-semibold">&#8377; 10,40,000</h2>
                  </div>
                  <img src={pinklinklogo} alt="loading" className="w-[22px] h-[22px] my-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className=" row-span-3  rounded-lg bg-[#202020] ">
          <div className="flex gap-2  mx-6 my-3">
            <h3 className="text-xl text-white font-semibold font-montserrat">Complaints</h3>
            <img src={linklogo} alt="loading " />
          </div>
          <div className="grid grid-cols-10 gap-3 w-[12ve]">
            <div className="col-span-3 flex rounded-lg px-3">
              <div className="w-[10vw] h-[8.5vh] rounded-l-xl  bg-[#00FFF5]"></div>
              <div className="bg-[#FFE605] rounded-r-xl w-[6vw] h-[8.5vh]"></div>
            </div>

            <div className="col-span-2 px-1 rounded-lg bg-[#111111]">
              <div className="flex gap-2 px-3 py-1">
                <h3 className="text-base font-montserrat font-normal text-white">Total Complaints</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="text-white font-semibold text-2xl px-3">158</div>
            </div>
            <div className="col-span-2 px-1  rounded-lg bg-[#111111]">
              <div className="flex gap-2 px-3 py-1">
                <h3 className="text-base font-montserrat font-normal text-[#00FFF5]">Resolved</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="px-3 text-white font-semibold text-2xl">96</div>
            </div>
            <div className="col-span-2 px-1  rounded-lg mr-4 bg-[#111111]">
              <div className="flex gap-2 px-3 py-1">
                <h3 className="text-base font-montserrat font-normal text-[#FFE605]">Open</h3>
                <img src={linklogo} alt="loading" />
              </div>
              <div className="text-white px-3 py-1 font-semibold text-2xl">62</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-2   grid  grid-rows-textlinegrid gap-3.5 text-white  ">
        <div className="row-span-6 rounded-lg mr-3 bg-[#202020]">
          <StudentUpdates />
        </div>
        {/* <div className="row-span-5 content-center place-content-center rounded-lg bg-[#202020] ">
                    <img src={emergencyicon} alt="loading" className="w-[7vw] h-[7vh] mx-auto  rounded-full" />
                    <h3 className="text-center text-base py-5 pr-11">Press only in Case of Emergency</h3>
                    <button className="   px-4 my-2  py-2 bg-gradient-to-t from-[#8D0000] to-[#FF0808] text-white rounded-md hover:from-[#FF0808] hover:to-[#8D0000] ">EMERGENCY</button>


                </div>  */}
      </div>
    </div>
  );
};
export default Analytics;
