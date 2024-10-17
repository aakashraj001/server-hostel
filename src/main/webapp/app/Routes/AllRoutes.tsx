import { Route, Routes } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import Room from '../pages/Room';
import Maintenanace from '../pages/Maintenanace';
import Accounts from '../pages/Accounts';
import Analytics from 'app/pages/components/Dashboard/Analytics';
import Students from 'app/pages/components/Dashboard/Students';
import AccountsDashboard from 'app/pages/components/Accounts/Pages/Dashboard';
import Credit from 'app/pages/components/Accounts/Pages/Credit';
import Debit from 'app/pages/components/Accounts/Pages/Debit';
import Occupancy from 'app/pages/components/Rooms/Occupancy';
import Hostel from 'app/pages/components/Rooms/components/occupancy/hostel';
import PrivateComponent from 'app/pages/components/AuthComponents/PrivateComponent';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import Assigned from '../components/Rooms/Assigned';
import Rooms from 'app/pages/components/Rooms/Rooms';
import Assigned from 'app/pages/components/Rooms/Assigned';
import React from 'react';
import Hostels from 'app/pages/components/Rooms/Hostels';

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
