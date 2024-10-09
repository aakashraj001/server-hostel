import BeddedBunker from './components/rooms/BeddedBunker';
import '../../assets/styles/Rooms.css';
import SearchIcon from '@mui/icons-material/Search';

const Rooms = () => {
  const dataArr = [
    {
      name: 'Occupied',
      count: 358,
      color: '#00FFF5',
    },
    {
      name: 'Vacant',
      count: 98,
      color: '#FFE605',
    },
    {
      name: 'Types',
      count: 14,
      color: '#FFFFFF',
    },
    {
      name: 'Tenants',
      count: 750,
      color: '#FFFFFF',
    },
  ];

  const bunkerArr = [
    {
      hostelName: 'H1',
      floor: '07',
      room: '07',
      sharingTypes: '06',
      totalRooms: 125,
      rentPerTenant: '50,000',
      tenants: 658,
      furniture: 125,
      charts: {
        values: [
          {
            heading: 'Expected',
            amount: '₹ 6,58,000',
            color: '#FFFFFF',
          },
          {
            heading: 'Collected',
            amount: '₹ 1,54,500',
            color: '#00FFF5',
          },
          {
            heading: 'Due',
            amount: '₹ 3,00,000',
            color: '#FFE605',
          },
          {
            heading: 'Overdue',
            amount: '₹ 2,04,000',
            color: '#FF05C8',
          },
        ],
      },
      Furniture: {
        values: [
          {
            item: 'Ceiling Fan',
            count: 50,
          },
          {
            item: 'Center Table',
            count: 12,
          },
          {
            item: 'Chairs',
            count: 123,
          },
          {
            item: 'Refrigerator',
            count: 6,
          },
          {
            item: 'Kettle',
            count: 12,
          },
        ],
      },
    },
    {
      hostelName: 'H1',
      floor: '07',
      room: '07',
      sharingTypes: '06',
      totalRooms: 125,
      rentPerTenant: '50,000',
      tenants: 658,
      furniture: 125,
      charts: {
        values: [
          {
            heading: 'Expected',
            amount: '₹ 6,58,000',
            color: '#FFFFFF',
          },
          {
            heading: 'Collected',
            amount: '₹ 1,54,500',
            color: '#00FFF5',
          },
          {
            heading: 'Due',
            amount: '₹ 3,00,000',
            color: '#FFE605',
          },
          {
            heading: 'Overdue',
            amount: '₹ 2,04,000',
            color: '#FF05C8',
          },
        ],
      },
      Furniture: {
        values: [
          {
            item: 'Ceiling Fan',
            count: 50,
          },
          {
            item: 'Center Table',
            count: 12,
          },
          {
            item: 'Chairs',
            count: 123,
          },
          {
            item: 'Refrigerator',
            count: 6,
          },
          {
            item: 'Kettle',
            count: 12,
          },
        ],
      },
    },
    {
      hostelName: 'H1',
      floor: '07',
      room: '07',
      sharingTypes: '06',
      totalRooms: 125,
      rentPerTenant: '50,000',
      tenants: 658,
      furniture: 125,
      charts: {
        values: [
          {
            heading: 'Expected',
            amount: '₹ 6,58,000',
            color: '#FFFFFF',
          },
          {
            heading: 'Collected',
            amount: '₹ 1,54,500',
            color: '#00FFF5',
          },
          {
            heading: 'Due',
            amount: '₹ 3,00,000',
            color: '#FFE605',
          },
          {
            heading: 'Overdue',
            amount: '₹ 2,04,000',
            color: '#FF05C8',
          },
        ],
      },
      Furniture: {
        values: [
          {
            item: 'Ceiling Fan',
            count: 50,
          },
          {
            item: 'Center Table',
            count: 12,
          },
          {
            item: 'Chairs',
            count: 123,
          },
          {
            item: 'Refrigerator',
            count: 6,
          },
          {
            item: 'Kettle',
            count: 12,
          },
        ],
      },
    },
  ];

  return (
    <div className="  mr-5 flex flex-col gap-4 ">
      {/* search input */}
      <div className="flex items-center bg-fourth w-[20vw] h-14 rounded-lg text-white">
        <SearchIcon className="ml-4 text-white" />
        <input className="bg-transparent w-full h-full pl-4 outline-none text-white" placeholder="Search..." type="text" />
      </div>
      {/* section2 */}
      <div className="flex gap-3">
        <div className="text-PrimaryText rounded-[10px] bg-fourth p-2">
          <h2 className="font-normal text-lg ">
            Total Rooms <span className="font-semibold text-lg ml-1">456</span>
          </h2>
        </div>
        <div className="bg-[#00868D] rounded-[10px] p-2">
          <button className="text-PrimaryText">+Add Rooms</button>
        </div>
      </div>

      {/* section3 */}
      <div className="flex gap-3 ">
        {dataArr.map((data, index) => (
          <div key={index} className="flex flex-col gap-1 bg-fourth p-2 w-[10vw] rounded-[10px]">
            <h3 className="text-PrimaryText font-normal text-lg">{data.name}</h3>
            <h1 className="font-semibold text-[32px]" style={{ color: data.color }}>
              {data.count}
            </h1>
          </div>
        ))}
      </div>

      {/* section 4 */}
      <div className="">
        <BeddedBunker rooms={bunkerArr} />
      </div>
    </div>
  );
};

export default Rooms;
