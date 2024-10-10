import React from 'react';
import { chartProps } from '../../interface/rooms.model';

const DistributionChart = ({ props }: chartProps) => {
  return (
    <div className="flex h-[3vh]">
      {props.map((prop, index) => (
        <div
          key={index}
          style={{ width: prop.width, backgroundColor: prop.color }}
          className={`h-full ${index === 0 ? 'rounded-l-[10px]' : ''} ${index === props.length - 1 ? 'rounded-r-[10px]' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default DistributionChart;
