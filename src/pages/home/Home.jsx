import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Charts from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Table from '../../components/table/Table';



const Home = () => {

 
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
        <Widget type="user" />
        <Widget type="visitor"/>
        <Widget type="other"/>
        <Widget type="others"/>
       </div>
       <div className="charts">
        <Featured/>
        <Charts aspect={3 / 1} title="User Visitors (Last 6 Months)"/>
       </div>
       <div className="listContainer">
        <div className="listTitle">Latest Visitors</div>
        <Table/>
       </div>
      </div>
    </div>
  )
}

export default Home
