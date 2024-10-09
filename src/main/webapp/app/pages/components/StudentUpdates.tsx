import linklogo from '../assets/images/linklogo.svg';
import studentin from '../assets/images/Studentin.svg';
import studentout from '../assets/images/studentout.svg';
import Studentlogo from '../assets/images/Studentlogo.png';

const StudentUpdates = () => {
  const messages = [
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentout,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentout,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentout,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentout,
    },
    {
      title: 'Ramakant Sharma',
      time: '12:30',
      image: studentin,
    },
  ];
  return (
    <div className=" rounded-lg bg-[#202020]">
      <div className="flex gap-3 my-[1vh] justify-center sticky">
        <h3 className="text-xl font-semibold"> Student Updates</h3>
        <img src={linklogo} alt="loading" className="my-2.5" />
      </div>
      <div className="h-[55vh] overflow-y-scroll hide-scrollbar ">
        {messages.map((message, index) => (
          <div key={index} className="text-white dark:bg-[#111111] my-[1vh] rounded-lg mx-[1vw] px-1.5 py-1.5 flex gap-2 ">
            <div>
              <img src={Studentlogo} alt="loading" />
            </div>
            <div>
              <h3 className="text-base ">{message.title}</h3>
              <div className="flex">
                <img src={message.image} alt="loading" />
                <p className="text-sm font-light">{message.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentUpdates;
