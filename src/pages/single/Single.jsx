import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
                <img src='https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' className='itemImg'/>
              <div className="details">
                 <h1 className="itemTilte">Jane Doe</h1>
                 <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">test@gmail.com</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">9865328754</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Banglore:</span>
                  <span className="itemValue">Nandini Layout, Banglaore</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                 </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
          <Chart aspect={3 / 1} title="User Visitors (Last 6 Months)"/>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
