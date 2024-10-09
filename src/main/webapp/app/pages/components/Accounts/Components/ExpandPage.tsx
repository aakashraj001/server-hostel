import { creditdetails } from '../interfaces/Accounts.model';
import colapselogo from '../../../../../content/images/images/colapselogo.svg';
import excellogo from '../../../assets/images/excellogo.svg';
import { useContext, useState } from 'react';
import prevArrow from '../../../../../content/images/prevArrow.svg';
import nextArrow from '../../../../../content/images/nextArrow.svg';
import { ContextData, ContextValueType } from 'app/shared/contextdata/Context';
import Creditdetails from './Creditdetails';
import Debitdetails from './Debitdetails';
import React from 'react';

interface Types {
  props: creditdetails[];
  heading: string;
}

const ExpandPage = ({ props, heading }: Types) => {
  const [selectedValue, setSelectedValue] = useState<string>('10');
  const [current, setcurrent] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const handlePrev = () => {
    if (current <= 0) {
      setcurrent(0);
    } else {
      setcurrent(current - 1);
    }
  };
  const handleNext = () => {
    if (current >= parseInt(selectedValue, 10) - 3) {
      setcurrent(0);
    } else {
      setcurrent(current + 1);
    }
  };

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
  const debitpaymnetdetails = [
    {
      transactionId: 'kkccwmkm4939430',
      method: 'UPI',
      name: 'Harsh Kadyan',
      RoomNo: '702',
      FloorNo: '07',
      HostelId: 'H1',
      ContactNumber: '+91 8528985298',
      Remark: 'Vendor Payment',
      Amount: '₹ 1,56,000',
      Date: '12 Nov 2024',
      DueDate: '12 Nov 2024',
      ReceiptId: 'cmkwmeck34435',
      orderId: '#ewele335t4663',
      grandTotal: '₹ 1,59,963',
      amountPaid: '₹ 1,56,810',
      amountRemaining: '₹ 3,810',
      OrderDueDate: '12 sep 2023',
      ExpectedDelivery: '12 sep 2023',
      vendorName: 'Naraymuthry Furniture Private Limited',
      gstID: 'GSTUIN45698PORI',
      vendorAddress:
        '101-103 Chanda Tower, Opp.Grand Ustave Marriage Garden, Main Gandhi Path Road, Vaishali Nagar, Jaipur ,Rajasthan-302021 India',
      productName: 'Khaitan Steel Bed',
      quantity: 121,
      Price: '12,000',
    },
  ];

  const { creditPage, debitPage, setdebitPage, setcreditPage, setcreditExpand, setdebitExpand } = useContext(
    ContextData,
  ) as ContextValueType;
  const handlecredit = (value: string) => {
    setcreditPage(true);
  };
  const handledebit = (value: string) => {
    setdebitPage(true);
  };

  const handleCreditexpand = () => {
    setcreditExpand(false);
  };

  const handleDebitExpand = () => {
    setdebitExpand(false);
  };

  return (
    <section>
      <div className="w-[85vw] h-[86vh] absolute bg-baseOne top-[14.7vh] rounded-lg px-5 py-7 ">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <h2 className="text-xl text-center text-PrimaryText font-semibold">{heading}</h2>

            {heading === 'Credit History' ? (
              <img src={colapselogo} alt="loading" className="w-7 h-7 cursor-pointer" onClick={handleCreditexpand} />
            ) : (
              <img src={colapselogo} alt="loading" className="w-7 h-7 cursor-pointer" onClick={handleDebitExpand} />
            )}
          </div>
          <div className="flex gap-11">
            <div className="flex gap-3 whitespace-nowrap bg-[#20744A] px-3 py-2 rounded-md">
              <img src={excellogo} alt="loading" className="w-4 h-4 mt-1.5" />
              <h3 className="text-base font-medium">Export Data</h3>
            </div>
            <div className="flex gap-3 text-PrimaryText">
              <h3 className="text-base text-center mt-0.5 font-medium">Entries/Pages</h3>
              <select value={selectedValue} className="bg-baseThree px-3 py-1 rounded-lg text-PrimaryText" onChange={handleChange}>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-[5vh] h-[61vh] overflow-y-scroll hide-scrollbar text-PrimaryText">
          <div className="flex gap-11 space-x-[3vw] px-11">
            <h3 className="">Name</h3>
            <h3 className="pl-[6vw]">Amount</h3>
            <h3 className="pl-[3vw]">Date</h3>
            <h3 className="pl-[2vw]">Remarks</h3>
            <h3 className="">Room</h3>
            <h3 className="">Hostel</h3>
            <h3 className="pl-[2vw]">Contactno</h3>
          </div>

          <div className="space-y-4">
            {props.map((prop, index) => (
              <div key={index} className="bg-baseThree rounded-lg text-PrimaryText mt-3 flex gap-5 space-x-[5.5vw] px-3 py-3">
                <p className="px-3">{prop.name}</p>
                <p className="">{prop.amount}</p>
                <p className="">{prop.date}</p>
                <p className="">{prop.remarks}</p>
                <p className="">{prop.room}</p>
                <p className="">{prop.hostel}</p>
                <p className="">{prop.contactno}</p>
                <div className="relative cursor-pointer group">
                  <div className="flex flex-col gap-1 cursor-pointer">
                    <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                    <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                    <div className="rounded-lg w-[0.2vw] h-[0.2vh] px-0.5 py-0.5 bg-white"></div>
                    {heading === 'Credit History' ? (
                      <div
                        className="absolute top-0 right-0  bg-baseOne hidden z-50 mt-3 cursor-pointer group-hover:block "
                        onClick={() => handlecredit(prop.paymentId)}
                      >
                        <div className="bg-baseOne text-white whitespace-nowrap  py-2 px-3 ">
                          <h3>View Details </h3>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="absolute top-0 right-0  bg-baseOne hidden z-50 mt-3 cursor-pointer group-hover:block "
                        onClick={() => handledebit(prop.paymentId)}
                      >
                        <div className="bg-baseOne text-white whitespace-nowrap  py-2 px-3 ">
                          <h3>View Details </h3>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex text-PrimaryText space-x-3 mt-[3vh] ml-[25vw]">
          <div className="flex gap-2 cursor-pointer" onClick={handlePrev}>
            <img src={prevArrow} alt="loading" className="w-3 h-3 mt-[1vh]" />
            <h3>Prev</h3>
          </div>
          <div className="flex px-1">
            <div className="flex space-x-3">
              <h3 className="bg-baseThree px-2 py-0.5">{current}</h3>
              <h3>{current + 1}</h3>
              <h3>{current + 2}</h3>
              <h3>{current + 3}</h3>
              <h3>{current + 4}</h3>
            </div>
            {current < parseInt(selectedValue, 10) - 4 ? (
              <div className="flex  space-x-5">
                <h3 className="text-xl pl-5">. . . . . . . . . . . .</h3>
                <h3>{parseInt(selectedValue, 10) - 2}</h3>
                <h3>{parseInt(selectedValue, 10) - 1}</h3>
                <h3>{parseInt(selectedValue, 10)}</h3>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex gap-2 px-5 cursor-pointer" onClick={handleNext}>
              <h3>Next</h3>
              <img src={nextArrow} alt="loading" className="w-3 h-3 mt-[1vh]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {heading === 'Credit History'
          ? creditPage && <Creditdetails props={creditpaymnetdetails} />
          : debitPage && <Debitdetails props={debitpaymnetdetails} />}
      </div>
    </section>
  );
};

export default ExpandPage;
