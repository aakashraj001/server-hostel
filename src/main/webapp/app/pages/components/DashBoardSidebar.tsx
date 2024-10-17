import { NavLink, useLocation } from 'react-router-dom';
import '../../../content/css/sidebar.css';
import React from 'react';

interface propstypeOf {
  image: string;
  title: string;
  path: string;
  disabled?: boolean;
}

interface arrtypeof {
  props: propstypeOf[];
}

const DashBoardSidebar = (props: arrtypeof) => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="fixed top-[13vh] left-[3vh] grid grid-rows-sidebarrowgrid gap-3 h-[87vh] dark:bg-[#202020] rounded-lg">
      {props.props.map((prop, index) =>
        prop.disabled ? (
          <div key={index} className="w-full h-[10vh] px-5 flex gap-2 py-7 text-[#B0B0B0] opacity-50 cursor-not-allowed">
            <img src={prop.image} alt="loading" className="w-[2vw] h-[3vh]" />
            <h3 className="text-lg font-semibold font-Montserrat text-center">{prop.title}</h3>
          </div>
        ) : (
          <NavLink
            key={index}
            to={prop.path}
            className={`w-full h-[10vh] px-5 flex gap-2 py-7 ${isActiveRoute(prop.path) ? 'bg-[#2F2F2F] text-white' : 'text-[#B0B0B0]'}`}
          >
            <img src={prop.image} alt="loading" className="w-[2vw] h-[3vh]" />
            <h3 className="text-lg font-semibold font-Montserrat text-center">{prop.title}</h3>
          </NavLink>
        ),
      )}
    </div>
  );
};

export default DashBoardSidebar;
