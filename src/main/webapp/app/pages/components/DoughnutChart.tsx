import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  dataprops: number[];
  colorprops: string[];
  height?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ dataprops, colorprops, height = '30vh' }) => {
  const data = {
    datasets: [
      {
        data: dataprops,
        backgroundColor: colorprops,
        borderColor: colorprops,
        cutout: '80%',
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: ChartJs<'doughnut', number[], unknown>) {
      const { ctx, data } = chart;
      const firstDatasetItem = chart.getDatasetMeta(0).data[0];
      if (firstDatasetItem) {
        const centerX = firstDatasetItem.x!;
        const centerY = firstDatasetItem.y!;
        ctx.save();
        ctx.font = 'bolder 32px Montserrat';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${data.datasets[0].data[1].toString()}%`, centerX, centerY);
      }
    },
  };

  return (
    <div style={{ height }} className="w-full">
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
};

export default DoughnutChart;
