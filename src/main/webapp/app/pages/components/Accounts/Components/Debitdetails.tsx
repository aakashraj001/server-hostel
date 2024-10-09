import { ContextData, ContextValueType } from 'app/shared/contextdata/Context';
import { useContext } from 'react';
import Roomlogo from '../../../../../content/images/images/Roomlogo.svg';
import hostelogo from '../../../../../content/images/images/hostellogo.svg';
import calenderlogo from '../../../../../content/images/images/calander.svg';
import downloadIcon from '../../../../../content/images/images/DownloadIcon.svg';
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
  orderId: string;
  grandTotal: string;
  amountPaid: string;
  amountRemaining: string;
  OrderDueDate: string;
  ExpectedDelivery: string;
  vendorName: string;
  gstID: string;
  vendorAddress: string;
  productName: string;
  quantity: number;
  Price: string;
}
interface Types {
  props: creditTypes[];
}

const Debitdetails = ({ props }: Types) => {
  const { debitPage, setdebitPage } = useContext(ContextData);
  const handleClick = () => {
    setdebitPage(false);
  };
  return (
    <div
      className={`bg-baseTwo z-50 absolute text-PrimaryText px-7 py-5 right-0 top-0 w-[60vw]  h-screen overflow-y-scroll transition-transform duration-[5000]  ease-in-out ${debitPage ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="text-3xl cursor-pointer" onClick={handleClick}>
        <h2>X</h2>
      </div>
      <div className="flex justify-between pt-5">
        <h1 className="text-3xl font-medium font-montserrat ">Debit Details</h1>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-base ">Method</h1>
          <h1 className="bg-baseOne text-base py-4 px-7  text-center border-2 border-baseBorder rounded-lg ">{props[0].method}</h1>
        </div>
      </div>

      <div className="flex flex-col text-PrimaryText py-5">
        <h3 className="text-base text-baseHeading">Transaction ID/UTR Number</h3>
        <h1 className="text-3xl font-medium">{props[0].transactionId}</h1>
      </div>
      <div className="flex gap-[3vw] py-5">
        <div className="flex flex-col gap-[1vw]">
          <h3 className="text-xl font-montserrat font-medium">Date</h3>
          <div className="flex gap-3 border-2 border-white rounded-lg px-3 py-2">
            <img src={calenderlogo} alt="laoding" className="w-5 h-4 my-auto" />
            <h3>{props[0].Date}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <h3 className="text-xl font-montserrat font-medium">Due Date</h3>
          <div className="flex gap-3 border-2 border-white rounded-lg px-3 py-2">
            <img src={calenderlogo} alt="laoding" className="w-5 h-4 my-auto" />
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
      <div className="mt-[5vh] bg-baseOne text-white rounded-md w-fit px-5 py-3">
        <div className="flex flex-col gap-7">
          <div className="flex gap-[10vw]">
            <div>
              <h3 className="text-base font-montserrat text-baseHeading">Name</h3>
              <h3 className="text-xl font-medium font-montserrat">{props[0].name}</h3>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-3 border-2 border-baseBorder rounded-lg px-3">
                <img src={Roomlogo} alt="loading" className="w-5 h-4 my-auto" />
                <h3 className=" my-auto">{props[0].RoomNo}</h3>
              </div>
              <div className="flex gap-1 border-2 border-baseBorder rounded-lg px-3">
                <h3 className="my-auto">Floor No.</h3>
                <h3 className="my-auto">{props[0].FloorNo}</h3>
              </div>
              <div className="flex gap-1 border-2 border-baseBorder rounded-lg px-3">
                <img src={hostelogo} alt="loading" className="w-5 h-4 my-auto" />
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

      <div className="flex gap-[13vw] py-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-medium font-montserrat">Order Details</h3>
          <p className="text-base text-medium">OrderID:{props[0].orderId}</p>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 bg-baseOne h-fit px-3 py-2 rounded-md">
            <p className="text-base font-medium font-montserrat">Invoice</p>
            <img src={downloadIcon} alt="loading" className="w-4 h-4 mt-1" />
          </div>
          <div className="flex gap-2 bg-baseOne h-fit px-3 py-2 rounded-md">
            <p className="text-base font-montserrat font-medium">Images</p>
            <img src={downloadIcon} alt="loading" className="w-4 h-4 mt-1" />
          </div>
        </div>
      </div>

      <div className="flex gap-11 font-montserrat">
        <div className="flex flex-col gap-3 bg-baseOne px-[2vw] py-2 rounded-lg">
          <p className="text-base text-baseHeading ">Grand Total</p>
          <p className="text-xl font-medium">{props[0].grandTotal}</p>
        </div>
        <div className="flex flex-col gap-3 bg-baseOne px-[2vw] py-2  rounded-lg">
          <p className="text-base text-baseHeading">Amount Paid</p>
          <p className="text-xl font-medium">{props[0].amountPaid}</p>
        </div>
        <div className="flex flex-col gap-3 bg-baseOne px-[2vw] py-2 rounded-lg">
          <p className="text-base text-baseHeading">Amount Remaining</p>
          <p className="text-xl font-montserrat">{props[0].amountRemaining}</p>
        </div>
      </div>
      <div className="flex gap-[10vw] mt-[5vh]">
        <div>
          <p className="text-base text-baseHeading">Due Date</p>
          <p className="text-base">{props[0].OrderDueDate}</p>
        </div>
        <div>
          <p className="text-base text-baseHeading">Expected Delivery</p>
          <p className="text-base">{props[0].ExpectedDelivery}</p>
        </div>
      </div>
      <div className="mt-[5vh]">
        <h2 className="text-2xl">Vendor Details</h2>
      </div>
      <div className="mt-[2vh]">
        <p className="text-xl font-medium ">{props[0].vendorName}</p>
        <p className="text-base text-baseHeading pt-[2vh]">GSTIN/LLP Reg No./ Prop Number: </p>
        <p className="text-base text-baseHeading ">{props[0].gstID}</p>
        <p className="text-base text-baseHeading pt-[2vh] w-[30vw]">{props[0].vendorAddress}</p>
      </div>
      <div>
        <h3 className="text-2xl mt-[5vh]">Product Details</h3>
        <div>
          <p className="text-base text-baseHeading">Name</p>
          <p className="text-xl font-medium">{props[0].productName}</p>
        </div>
        <div className="flex mt-[2vh] gap-[10vw]">
          <div className="flex flex-col">
            <p className="text-base text-baseHeading">Qty</p>
            <p className="text-base font-medium">{props[0].quantity}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-baseHeading">Price/Unit</p>
            <p className="text-base font-medium">{props[0].Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Debitdetails;
