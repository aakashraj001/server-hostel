import React from 'react';
import DoughnutChart from '../../../DoughnutChart';
import { dountChartProp } from '../../interface/rooms.model';

const DonutChartwithData = ({ values }: dountChartProp) => {
  const fourchart = [19, 25, 28];
  const fourcolor = ['#FF05C8', '#00FFF5', '#FFE605'];
  return (
    <div className="flex  gap-5 p-4">
      <div className="flex flex-col gap-0.5 h-[20vh]">
        <h3 className="text-PrimaryText font-normal text-[16px]">Collection</h3>
        <div className="h-[20vh]">
          <DoughnutChart dataprops={fourchart} colorprops={fourcolor} height="25vh" />
        </div>
      </div>
      <div className="w-[20vw] h-[10vh] grid grid-cols-2 mt-[8vh]  gap-3">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col  gap-1 w-fit h-fit bg-baseFive">
            <h1 className="text-PrimaryText font-normal text-[16px]">{value.heading}</h1>
            <h1 className="font-semibold text-[20px]" style={{ color: value.color }}>
              {value.amount}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DonutChartwithData;
