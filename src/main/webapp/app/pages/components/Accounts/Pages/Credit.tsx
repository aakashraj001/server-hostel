import DoughnutChart from '../../DoughnutChart';
import AreaGraph from '../Components/AreaGraph';
import ExpandPage from '../Components/ExpandPage';
import { useContext } from 'react';
import { ContextData, ContextValueType } from '../../../../shared/contextdata/Context';
import Creditdetails from '../Components/Creditdetails';
import React from 'react';

const Credit = () => {
  const fourchart = [19, 50, 28];
  const fourcolor = ['#FF05C8', '#00FFF5', '#FFE605'];
  const dataarr = [9, 11, 8, 11, 10, 15];
  const topcolor = '#F56443';
  const bottomcolor = '#FF4242';
  const borderColors = '#FF6E4E';
  const pointerBoderColors = '#FF6E4E';

  const credit = [
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
    {
      paymentId: 'nmncnq4839mcnasm2892',
      name: 'Ramakant Sharma',
      amount: '₹ 1,56,000',
      date: '12 Feb 2023',
      remarks: 'Fees',
      room: '112',
      hostel: 'H1',
      contactno: '+91 5234564545',
    },
  ];

  const creditpaymnetdetails = [
    {
      transactionId: 'kkccwmkm4939430',
      method: 'UPI',
      name: 'Harsh Kadyan',
      RoomNo: '702',
      FloorNo: '07',
      HostelId: 'H1',
      ContactNumber: '+91 8528985298',
      Remark: 'Fees',
      Amount: '₹ 1,56,000',
      Date: '12 Nov 2024',
      DueDate: '12 Nov 2024',
      ReceiptId: 'cmkwmeck34435',
    },
  ];
  const { creditExpand, creditPage, setcreditPage, setcreditExpand } = useContext(ContextData);
  const handleCreditexpand = () => {
    setcreditExpand(true);
  };
  const handlecredit = (value: string) => {
    setcreditPage(true);
  };

  return (
    <section className="">
      <div className={`${creditExpand ? 'hidden ' : 'grid'} grid-rows-5 gap-3  mt-[9.5vh] max-h-fit`}>
        <div className="row-span-2 grid grid-cols-10 gap-3">
          <div className="col-span-8 bg-baseOne rounded-lg">
            <div className="flex gap-2 mx-6 my-3">
              <h3 className="text-white font-montserrat text-lg font-semibold">Fees Collection</h3>
              <img src="../../../../../content/images/linklogo.svg" alt="loading" />
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
                  <img src="../../../../../content/images/linklogo.svg" alt="loading" className="w-[22px] h-[22px] my-auto mr-3" />
                </div>

                <div className="col-span-2">
                  <div className="flex mx-auto my-4 gap-28 w-fit h-fit py-3  px-6  rounded-md bg-[#111111] text-white">
                    <div className="flex flex-col ">
                      <h3 className="text-base font-montserrat font-normal">Collected</h3>
                      <h2 className="text-2xl text-[#00FFF5]  font-semibold">&#8377; 26,00,000</h2>
                    </div>
                    <img src="../../../../../content/images/skylinklogo.svg" alt="loading" className="w-[22px] h-[22px] my-auto" />
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
                    <img src="../../../../../content/images/yellowlinklogo.svg" alt="loading" className="w-[22px] h-[22px] my-auto" />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex mx-auto my-4 gap-28 w-fit  px-6 h-fit py-3 rounded-md bg-[#111111] text-white">
                    <div className="flex flex-col ">
                      <h3 className="text-base font-montserrat font-normal">Overdue</h3>
                      <h2 className="text-2xl text-[#FF05C8] font-semibold">&#8377; 10,40,000</h2>
                    </div>
                    <img src="../../../../../content/images/pinklinklogo.svg" alt="loading" className="w-[22px] h-[22px] my-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 content-center ">
            <button className=" border-2 rounded-lg border-[#0FFF5] text-skybluecolor px-7 font-medium text-xl py-5 my-3 mx-3 ">
              Request Payment
            </button>
          </div>
        </div>
        <div className="row-span-3 grid grid-cols-10 gap-3 mr-3 ">
          <div className="col-span-5 relative  bg-secondary rounded-lg">
            <div className="sticky">
              <div className="flex gap-3 px-3 py-3 text-white">
                <h3 className="text-xl font-semibold"> Credit</h3>
                <img
                  src="../../../../../content/images/expandlogo.svg"
                  alt="loading"
                  className="cursor-pointer"
                  onClick={handleCreditexpand}
                />
              </div>
            </div>
            <div className="relative overflow-y-scroll h-[70vh] mx-3 my-1 hide-scrollbar ">
              {credit.map((detail, index) => (
                <div key={index} className="flex justify-between px-3 py-3 text-white rounded-lg bg-primary my-3">
                  <h3>{detail.name}</h3>
                  <div className="flex gap-11">
                    <p>{detail.amount}</p>
                    <div className="relative cursor-pointer group">
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                        <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                        <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                        <div
                          className="absolute top-0 right-0  bg-baseOne hidden z-50 mt-3 cursor-pointer group-hover:block "
                          onClick={() => handlecredit(detail.paymentId)}
                        >
                          <div className="bg-baseOne text-white whitespace-nowrap  py-2 px-3 ">
                            <h3>View Details </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5 relative  bg-secondary rounded-lg ">
            <div>
              <h3 className="px-3 py-3 text-white font-semibold text-xl">Credit Graph</h3>
            </div>
            <div className="mt-[10vh]">
              <AreaGraph
                dataarr={dataarr}
                topcolor={topcolor}
                bottomcolor={bottomcolor}
                borderColors={borderColors}
                pointerBoderColors={pointerBoderColors}
              />
            </div>
          </div>
        </div>
      </div>
      <div>{creditPage && <Creditdetails props={creditpaymnetdetails} />}</div>
      <div className=" w-full h-screen ">{creditExpand && <ExpandPage heading="Credit History" props={credit} />}</div>
    </section>
  );
};
export default Credit;
