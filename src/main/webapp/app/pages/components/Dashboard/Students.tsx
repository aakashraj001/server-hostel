import linklogo from '../../assets/images/linklogo.svg';
import searchicon from '../../assets/images/searchicon.svg';
import filtericon from '../../assets/images/filtericon.svg';
import userlogo from '../../assets/images/UserIcon.svg';
import eyeicon from '../../assets/images/eyeicon.svg';
import '../../assets/styles/Dashboard_Students.css';
import calander from '../../assets/images/calander.svg';
import StudentUpdates from '../StudentUpdates';
import { useContext, useState } from 'react';
import AddStudentForm from '../DashboardComponents/AddStudentForm';
import { ContextData, ContextValueType } from '../../contextdata/Context';

const Students = () => {
  const { student, setStudentAdd } = useContext(ContextData) as ContextValueType;

  const [Remove, setRemove] = useState(false);

  const handleAddClick = () => {
    setStudentAdd(!student);
  };
  const handleRemoveClick = () => {
    setRemove(!Remove);
  };
  const details = [
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
    {
      name: 'Abhinav Srivastva',
    },
  ];
  const DefaultersStudents = [
    {
      name: 'Abhinav Srivastva',
      complaint: 'Broke 4 Test Tubes in Hostel Mess',
      fine: '₹ 1,500',
      Date: '12 Nov 2024',
    },
    {
      name: 'Abhinav Srivastva',
      complaint: 'Broke 4 Test Tubes in Hostel Mess',
      fine: '₹ 1,500',
      Date: '12 Nov 2024',
    },
    {
      name: 'Abhinav Srivastva',
      complaint: 'Broke 4 Test Tubes in Hostel Mess',
      fine: '₹ 1,500',
      Date: '12 Nov 2024',
    },
    {
      name: 'Abhinav Srivastva',
      complaint: 'Broke 4 Test Tubes in Hostel Mess',
      fine: '₹ 1,500',
      Date: '12 Nov 2024',
    },
    {
      name: 'Abhinav Srivastva',
      complaint: 'Broke 4 Test Tubes in Hostel Mess',
      fine: '₹ 1,500',
      Date: '12 Nov 2024',
    },
  ];
  return (
    <div className=" grid grid-cols-10 gap-3 mt-[13.5vh] h-fit">
      <div className="col-span-8  grid grid-rows-11 gap-3">
        <div className="row-span-2 bg-third rounded-lg">
          <div className=" grid grid-cols-8 content-center ">
            <div className="col-span-2">
              <div className=" bg-primary text-white rounded-lg py-3 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">Total Students</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className="text-2xl font-medium"> 3569</p>
              </div>
              <div className=" bg-primary text-white rounded-lg py-3 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">Students Assigned</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className=" text-2xl font-medium  text-pinkcolor">2569</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className=" bg-primary text-white rounded-lg py-3 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">In Hostel</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className="text-2xl text-skybluecolor font-medium"> 1569</p>
              </div>
              <div className=" bg-primary text-white rounded-lg py-3 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">Students Removed</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className=" text-2xl font-medium text-redcolor ">1000</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className=" bg-primary text-white rounded-lg py-3 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">Outside Hostel</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className="text-2xl font-medium text-greycolor">2500</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className=" bg-primary text-white rounded-lg py-5 px-3 my-3 mx-3">
                <div className="flex gap-3 ">
                  <h3 className="text-base font-montserrat">Fees Defaulters</h3>
                  <img src={linklogo} alt="loading " />
                </div>
                <p className="text-[32px] leading-[2.5rem] text-yellowcolor font-semibold">150</p>
                <button className=" bg-fourth text-white rounded-lg text-xl font-medium py-3 px-12 my-3 mx-3">View List</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-4  grid grid-cols-8 gap-3">
          <div className="relative col-span-4 gap-1   bg-secondary rounded-lg ">
            <div className="sticky">
              <div className=" flex gap-1 align-middle px-3 py-3">
                <h3 className="text-white text-base">Students</h3>
                <img src={linklogo} alt="loading" className="" />
              </div>
              <div className=" grid grid-cols-6 gap-3 mx-3 my-3">
                <div className="col-span-4 bg-primary rounded-lg flex gap-1 py-3 px-3">
                  <img src={searchicon} alt="loading" className="" />
                  <h3 className="text-greycolor my-auto text-base">Search...</h3>
                </div>
                <div className="col-span-2 flex gap-3 rounded-lg bg-fifth px-3 py-3">
                  <img src={filtericon} alt="loading" className="" />
                  <h3 className="my-auto text-white text-base">Filter</h3>
                </div>
              </div>
            </div>
            <div className="m-3 relative h-[40vh] overflow-y-scroll hide-scrollbar ">
              <div>
                {details.map(detail => (
                  <div key={detail.name} className="flex justify-between rounded-xl my-3 text-white bg-primary py-3">
                    <div className="flex gap-3">
                      <img src={userlogo} alt="loading" className="pl-3" />
                      <h3>{detail.name}</h3>
                    </div>
                    <img src={eyeicon} alt="loading" className="pr-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative col-span-4    bg-secondary rounded-lg ">
            <div className="sticky rounded-lg">
              <div className=" flex gap-1 align-middle px-3 py-3">
                <h3 className="text-white text-base">Defaulters Students</h3>
                <img src={linklogo} alt="loading" className="" />
              </div>
              <div className=" grid grid-cols-6 gap-3 mx-3 my-3">
                <div className="col-span-4 bg-primary rounded-lg flex gap-1 py-3 px-3">
                  <img src={searchicon} alt="loading" className="" />
                  <h3 className="text-greycolor my-auto text-base">Search...</h3>
                </div>
                <div className="col-span-2 flex gap-3 rounded-lg bg-fifth px-3 py-3">
                  <h3 className="my-auto text-white text-base mx-auto">+ Add</h3>
                </div>
              </div>
            </div>
            <div className="m-3  relative h-[40vh]  overflow-y-scroll hide-scrollbar">
              <div>
                {DefaultersStudents.map(detail => (
                  <div key={detail.name} className="flex flex-col rounded-xl my-3 text-white bg-primary py-3">
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <img src={userlogo} alt="loading" className="pl-3" />
                        <h3>{detail.name}</h3>
                      </div>
                      <img src={eyeicon} alt="loading" className="pr-3" />
                    </div>
                    <p className="px-3 py-5">{detail.complaint}</p>
                    <div className="flex gap-3 mx-3 mb-3">
                      <button className="border-2 border-[#2E2E2E] px-3 py-1 rounded-lg">Fine: {detail.fine}</button>
                      <button className="flex gap-1 border-2 border-[#2E2E2E] px-3 py-1 rounded-lg text-center ">
                        <img src={calander} alt="loading" className="h-[3vh]" />
                        {detail.Date}
                      </button>
                    </div>
                    <div className="flex gap-2 mx-3 my-1 ">
                      <button className="border-2 rounded-lg border-[#FF1010] text-[#FF1010] text-base px-2  py-1">Remove Defaulter</button>
                      <button className="border-2 rounded-lg border-[#00FFF5] text-[#00FFF5] text-base px-2 py-1">Send Payment Link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-rows-6 gap-3">
        <div className="row-span-1 flex flex-col gap-3 my-3 mx-3">
          {student ? (
            <div className="absolute top-0 w-full h-screen popbox z-50 backdrop-blur-sm bg-black/30 left-0   text-5xl text-white">
              <div className="w-[45vw] max-h-[50vh] mx-auto py-5">
                <AddStudentForm />
              </div>
            </div>
          ) : (
            <button className="px-3 py-3 border-2 border-[#00FFF5] text-[#00FFF5] text-xl rounded-lg" onClick={handleAddClick}>
              + Add Student
            </button>
          )}
          <button className="border-2 border-[#FF2A2A] text-[#FF2A2A] text-xl px-3 py-3 rounded-lg" onClick={handleRemoveClick}>
            Remove Student
          </button>
        </div>
        <div className="row-span-5 mx-3 my-3">
          <StudentUpdates />
        </div>
      </div>
    </div>
  );
};

export default Students;
