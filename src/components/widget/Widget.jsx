import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'
import './widget.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TourIcon from '@mui/icons-material/Tour';
import AddIcon from '@mui/icons-material/Add';

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
      data={
        title:"USERS",
        count:false,
        link:"See all users",
        icon: <PersonOutlineIcon className="icon" 
        style={{
          color:"crimson", backgroundColor: "rgba(225, 0, 0, 0.2)"
        }}
        />,
      };  
      break;  
      case "visitor":
      data={
        title:"VISITORS",
        count:true,
        link:"See all visitors",
        icon: <TourIcon className="icon"
        style={{
          color:"goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"
        }}
        />,
      };  
      break;  
      case "other":
      data={
        title:"OTHER",
        count:true,
        link:"See all other",
        icon: <AddIcon className="icon"
        style={{
          color:"green", backgroundColor: "rgba(0,  128, 0, 0.2)"
        }}/>,
      };  
      break;  
      case "others":
      data={
        title:"OTHERS",
        count:true,
        link:"See all others",
        icon: <AddIcon className="icon"
        style={{
          color:"purple", backgroundColor: "rgba(128, 0, 128, 0.2)"
        }}
        />,
      };  
      break;  
        default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.count} {amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>{diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
