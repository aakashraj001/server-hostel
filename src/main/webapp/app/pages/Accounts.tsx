import { Routes, Route } from 'react-router-dom';
import DashBoardSidebar from '../pages/components/DashBoardSidebar';
import Dashboard from '../pages/components/Accounts/Pages/Dashboard';
import Credit from '../pages/components/Accounts/Pages/Credit';
import Debit from '../pages/components/Accounts/Pages/Debit';
import React from 'react';

const Accounts = () => {
  const details = [
    {
      image: 'src/assets/images/sidedashboard.svg',
      title: 'Dashboard',
      path: '',
    },
    {
      image: 'src/assets/images/credit.svg',
      title: 'Credit',
      path: 'credit',
    },
    {
      image: 'src/assets/images/debit.svg',
      title: 'Debit',
      path: 'debit',
    },
    {
      image: 'src/assets/images/vendors.svg',
      title: 'Vendors',
      path: 'vendor',
      disabled: true,
    },
    {
      image: 'src/assets/images/orders.svg',
      title: 'Orders',
      path: 'order',
      disabled: true,
    },
    {
      image: 'src/assets/images/expected.svg',
      title: 'Expected',
      path: 'expected',
      disabled: true,
    },
    {
      image: 'src/assets/images/overdue.svg',
      title: 'Overdue',
      path: 'overdue',
      disabled: true,
    },
  ];
  return (
    <div className="w-full h-fit grid grid-cols-12  bg-primary">
      <div className="col-span-2">
        <DashBoardSidebar props={details} />
      </div>
      <div className=" col-span-12 mt-[5.5vh] ml-[13.5vw]">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="credit" element={<Credit />} />
          <Route path="debit" element={<Debit />} />
        </Routes>
      </div>
    </div>
  );
};
export default Accounts;
