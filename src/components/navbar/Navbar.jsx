import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon/>
            English
          </div>
          <div className="item">
          <DarkModeIcon onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <img src='https://images.pexels.com/photos/6827381/pexels-photo-6827381.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' className='avatar' ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
