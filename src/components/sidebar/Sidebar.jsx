import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TourIcon from '@mui/icons-material/Tour';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar white">
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}>
      <span className="logo">Logo</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{textDecoration:"none"}}>
            <span>Dashbord</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <GroupIcon className="icon"/>
            <Link to="/users" style={{textDecoration:"none"}}>
            <span>Users</span>
            </Link>
          </li>
          <li>
            <GroupAddIcon className="icon"/>
            <Link to="/users/New" style={{textDecoration:"none"}}>
            <span>Add users</span>
            </Link>
          </li>
          <li>
            <TourIcon className="icon"/>
            <Link to="/visitors" style={{textDecoration:"none"}}>
            <span>Visitors</span>
            </Link>
          </li>
          <li>
            <PersonAddIcon className="icon"/>
            <Link to="/visitors/NewVisitors" style={{textDecoration:"none"}}>
            <span>Add Visitors</span>
            </Link>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
