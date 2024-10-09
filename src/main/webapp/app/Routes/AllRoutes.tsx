import { Route, Routes } from 'react-router-dom';
import DashBoard from '../Pages/DashBoard';
import Room from '../Pages/Room';
import Maintenanace from '../Pages/Maintenanace';
import Accounts from '../Pages/Accounts';
import Analytics from '../components/Dashboard/Analytics';
import Students from '../components/Dashboard/Students';
import AccountsDashboard from '../components/Accounts/Pages/Dashboard';
import Credit from '../components/Accounts/Pages/Credit';
import Debit from '../components/Accounts/Pages/Debit';
import Occupancy from '../components/Rooms/Occupancy';
import Hostels from '../components/Rooms/Hostels';
import PrivateComponent from '../components/AuthComponents/PrivateComponent';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
// import Assigned from '../components/Rooms/Assigned';
import Rooms from '../components/Rooms/Rooms';
import Assigned from '../components/Rooms/Assigned';

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateComponent />}>
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Analytics />} />
          <Route path="student" element={<Students />} />
        </Route>
        <Route path="/rooms" element={<Room />}>
          <Route index element={<Occupancy />} />
          <Route path="hostels" element={<Hostels />} />
          <Route path="roomDetail" element={<Rooms />} />
          <Route path="assigned" element={<Assigned />} />
        </Route>

        <Route path="/maintenanace" element={<Maintenanace />} />
        <Route path="/accounts" element={<Accounts />}>
          <Route index element={<AccountsDashboard />} />
          <Route path="credit" element={<Credit />} />
          <Route path="debit" element={<Debit />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
export default AllRoutes;
