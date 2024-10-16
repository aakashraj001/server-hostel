import { NavLink, useLocation } from 'react-router-dom';
import { ContextData } from '../../shared/contextdata/Context';
import { useContext, useEffect } from 'react';
import '../../../content/css/Navbar.css';
import Calendar from './Calender';
import React from 'react';

const Navbar = () => {
  const { theme, settheme } = useContext(ContextData);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      settheme('dark');
    } else {
      settheme('light');
    }
  }, [settheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navlink = [
    {
      image: '../../../content/images/dashboardlogo.svg',
      title: 'Dashboard',
      path: '/',
    },
    {
      image: '../../../content/images/roomslogo.svg',
      title: 'Rooms',
      path: '/rooms',
    },
    {
      image: '../../../content/images/accountslogo.svg',
      title: 'Accounts',
      path: '/accounts',
    },
    {
      image: '../../../content/images/maintenancelogo.svg',
      title: 'Maintenance',
      path: '/maintenance',
      disabled: true,
    },
  ];

  const handleProfile = () => {};

  const isActiveRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="navbar fixed top-0 left-0 z-30 w-full">
      <div>
        <img src="../../../content/images/logo.svg" alt="HMS" className="w-[10vw] p-2 h-[10vh]" />
      </div>
      <div className="grid grid-cols-4 gap-3 content-center">
        {navlink.map((link, index) =>
          link.disabled ? (
            <div key={index} className="nav-link disabled flex gap-2">
              <img src={link.image} alt="loading" className="justify-end" />
              <h2 className="font-Montserrat text-xl font-medium">{link.title}</h2>
            </div>
          ) : (
            <NavLink to={link.path} key={index} end className={() => `nav-link ${isActiveRoute(link.path) ? 'active' : ''}`}>
              <img src={link.image} alt="loading" className="justify-end" />
              <h2 className="font-Montserrat text-xl font-medium">{link.title}</h2>
            </NavLink>
          ),
        )}
      </div>
      <div className="icons grid grid-cols-3 gap-3 content-center">
        <div className="calendar-container">
          <div className="icon">
            <img src="../../../content/images/calander.svg" alt="loading" />
          </div>
          <div className="calendar-popup">
            <Calendar />
          </div>
        </div>
        <div className="icon">
          <img src="../../../content/images/bellicon.svg" alt="loading" />
        </div>
        <div className="icon" onClick={handleProfile}>
          <img src="../../../content/images/Profile.svg" alt="loading" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
