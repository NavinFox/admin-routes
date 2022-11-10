import React from 'react'
import './visitorslist.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/table/Table'

const visitorslist = () => {
  return (
    <div className="list">
      <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Table/>
        </div>
    </div>
  )
}

export default visitorslist
