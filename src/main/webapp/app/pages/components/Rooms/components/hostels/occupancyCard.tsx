import React from 'react';
import DoughnutChart from '../../../DoughnutChart';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import HomeIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface HostelProps {
  hostel: {
    hostelName: string;
    address: string;
    totalRooms: number;
    occupiedRooms: number;
    floors: number;
    students: number;
    inHostel: number;
    expectedCollection: number;
    collectedAmount: number;
    remainingAmount: number;
    overdueAmount: number;
    furniture: {
      [key: string]: number;
    };
  };
}

const occupancyCard: React.FC<HostelProps> = ({ hostel }) => {
  const firstchart = [50, 50]; // Example chart data
  const firstcolor = ['#292929', '#00FFF5']; // Example chart colors
  const fourcolor = ['#FF05C8', '#00FFF5', '#FFE605'];
  const fourchart = [19, 50, 28];
  return (
    <div className="w-full h-full">
      <div className="bg-baseOne place-content-between flex w-[70vw] text-white p-4 mb-4 rounded-lg">
        <div>
          <h2 className="text-xl font-bold">{hostel.hostelName}</h2>
          <p className="mb-2">{hostel.address}</p>
          <div className="mx-[3vw] my-[7vh]">
            <DoughnutChart dataprops={firstchart} colorprops={firstcolor} />
          </div>
          <button className="w-full h-10 bg-cblue rounded-lg">Add Room</button>
        </div>
        <div>
          <div className="flex place-content-between">
            <div className="grid grid-cols-3 auto-rows-max gap-[1vw] w-[30vw] h-[30vh]">
              <div className="flex flex-col bg-fifth w-[9vw] p-[10%] h-20 rounded-lg">
                <div>Total Rooms</div>
                <p>{hostel.totalRooms}</p>
              </div>
              <div className="flex flex-col bg-fifth w-[9vw] p-[10%] h-20 rounded-lg">
                <div>Occupied</div>
                <p>{hostel.occupiedRooms}</p>
              </div>
              <div className="flex flex-col bg-fifth w-[9vw] p-[10%] h-20 rounded-lg">
                <div>Floors</div>
                <p>{hostel.floors}</p>
              </div>
              <div className="col-span-3 place-content-evenly w-[30vw] flex flex-row bg-fifth p-[2%] rounded-lg">
                <div>
                  <p>Students: </p>
                  <div>{hostel.students}</div>
                </div>
                <div>
                  <p>In Hostel: </p>
                  <div>{hostel.inHostel}</div>
                </div>
              </div>
            </div>
            <div className=" bg-fifth w-[15vw] rounded-lg p-4 h-[30vh]">
              <h2 className="text-lg font-bold">Collection</h2>
              <div className="h-[30vh] px-[15%]">
                <DoughnutChart dataprops={fourchart} colorprops={fourcolor} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 auto-rows-min gap-[1vw] mt-4">
            <div className="flex bg-fifth w-[48vw] items-center justify-center h-[20vh] rounded-lg">
              <div className="flex flex-col w-[10vw] items-center justify-center ">
                <div>Expected</div>
                <p>₹{hostel.expectedCollection.toLocaleString()}</p>
              </div>
              <div className="flex flex-col w-[10vw] items-center justify-center">
                <div>Collected</div>
                <p className="text-green-400">₹{hostel.collectedAmount.toLocaleString()}</p>
              </div>
              <div className="flex flex-col  w-[10vw] items-center justify-center">
                <div>Remaining</div>
                <p className="text-yellow-400">₹{hostel.remainingAmount.toLocaleString()}</p>
              </div>
              <div className="flex flex-col  w-[10vw] items-center justify-center">
                <div>Overdue</div>
                <p className="text-red-400">₹{hostel.overdueAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default occupancyCard;
