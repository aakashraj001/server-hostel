import { ContextData, ContextValueType } from 'app/shared/contextdata/Context';
import { useContext } from 'react';
import React from 'react';

interface creditTypes {
  transactionId: string;
  method: string;
  name: string;
  RoomNo: string;
  FloorNo: string;
  HostelId: string;
  ContactNumber: string;
  Remark: string;
  Amount: string;
  Date: string;
  DueDate: string;
  ReceiptId: string;
}
interface Types {
  props: creditTypes[];
}

const creditdetails = ({ props }: Types) => {
  const { creditPage, setcreditPage } = useContext(ContextData);
  const handleClick = () => {
    setcreditPage(false);
  };
  return (
    <div
      className={`bg-baseTwo z-50 absolute text-PrimaryText px-7 py-5 right-0 top-0 w-[60vw]  h-screen transition-transform duration-[5000]  ease-in-out ${creditPage ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="text-3xl cursor-pointer" onClick={handleClick}>
        <h2>X</h2>
      </div>
      <div className="flex justify-between py-5">
        <h1 className="text-3xl font-medium font-montserrat ">Credit Details</h1>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-base ">Method</h1>
          <h1 className="bg-baseOne text-base py-4 px-7  text-center border-2 border-baseBorder rounded-lg ">{props[0].method}</h1>
        </div>
      </div>
      <div className="flex flex-col text-PrimaryText">
        <h3 className="text-base text-baseHeading">Transaction ID/UTR Number</h3>
        <h1 className="text-3xl font-medium">{props[0].transactionId}</h1>
      </div>
      <div className="mt-[5vh] bg-baseOne text-white rounded-md w-fit px-5 py-3">
        <div className="flex flex-col gap-7">
          <div className="flex gap-[10vw]">
            <div>
              <h3 className="text-base font-montserrat text-baseHeading">Name</h3>
              <h3 className="text-xl font-medium font-montserrat">{props[0].name}</h3>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-3 border-2 border-baseBorder rounded-lg px-3">
                <img src="../../../../../content/images/Roomlogo" alt="loading" className="w-5 h-4 my-auto" />
                <h3 className=" my-auto">{props[0].RoomNo}</h3>
              </div>
              <div className="flex gap-1 border-2 border-baseBorder rounded-lg px-3">
                <h3 className="my-auto">Floor No.</h3>
                <h3 className="my-auto">{props[0].FloorNo}</h3>
              </div>
              <div className="flex gap-1 border-2 border-baseBorder rounded-lg px-3">
                <img src="../../../../../content/images/hostellogo.svg" alt="loading" className="w-5 h-4 my-auto" />
                <h3 className="my-auto">{props[0].HostelId}</h3>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base text-baseHeading">Contact Number</h3>
            <h3 className="text-xl font-medium font-montserrat">{props[0].ContactNumber}</h3>
          </div>
        </div>
      </div>
      <div className="flex gap-[10vw] py-5">
        <div className="rounded-lg flex flex-col gap-2 bg-baseOne w-fit px-11 py-3">
          <h3 className="text-base text-baseHeading ">Remarks</h3>
          <h3 className="text-xl font-medium font-montserrat">{props[0].Remark}</h3>
        </div>
        <div className="rounded-lg flex flex-col gap-2 bg-baseOne w-fit px-11 py-3">
          <h3 className="text-base text-baseHeading ">Amount</h3>
          <h3 className="text-xl font-medium font-montserrat">{props[0].Amount}</h3>
        </div>
      </div>

      <div className="flex gap-[3vw] py-5">
        <div className="flex flex-col gap-[1vw]">
          <h3 className="text-xl font-montserrat font-medium">Date</h3>
          <div className="flex gap-3 border-2 border-white rounded-lg px-3 py-2">
            <img src="../../../../../content/images/calander.svg" alt="laoding" className="w-5 h-4 my-auto" />
            <h3>{props[0].Date}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <h3 className="text-xl font-montserrat font-medium">Due Date</h3>
          <div className="flex gap-3 border-2 border-white rounded-lg px-3 py-2">
            <img src="../../../../../content/images/calander.svg" alt="laoding" className="w-5 h-4 my-auto" />
            <h3>{props[0].DueDate}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <h3 className="text-xl font-montserrat font-medium">Receipt</h3>
          <div className="flex gap-3 border-2 border-white rounded-lg px-3 py-2">
            <h3>{props[0].transactionId}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default creditdetails;
