import React from 'react'
import './featured.scss' 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar  value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <p className="title">Total visitors of today</p>
        <p className="count">12</p>
        <p className="desc">
            Last visitors processing. Last Visits may not be included
        </p>
        <div className='summary'>
            <div className="item">
                <div className="itemTitle">VISTIORS</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultAmount">123</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">LAST WEEK</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultAmount">12</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">LAST MONTH</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultAmount">23</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
