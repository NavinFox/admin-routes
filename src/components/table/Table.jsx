import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Visit = () => {

    const rows = [
        {
          id: 1143155,
          purpose: "JOB",
          img: "https://images.pexels.com/photos/9944899/pexels-photo-9944899.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          visitor: "John Smith",
          date: "1 March",
          time: "12:00",
          method: "Offline",
          status: "IN",
        },
        {
          id: 2235235,
          purpose: "Delivery",
          img: "https://images.pexels.com/photos/7130457/pexels-photo-7130457.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          visitor: "Michael Doe",
          date: "1 March",
          time: "12:00",
          method: "Online",
          status: "OUT",
        },
        {
          id: 2342353,
          purpose: "Interview",
          img: "https://images.pexels.com/photos/13835274/pexels-photo-13835274.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          visitor: "Redragon",
          date: "1 March",
          time: "12:00",
          method: "Offline",
          status: "IN",
        },
        {
          id: 2357741,
          purpose: "JOB",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          visitor: "Jane Smith",
          date: "1 March",
          time: "12:00",
          method: "Online",
          status: "IN",
        },
        {
          id: 2342355,
          purpose: "JOB",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          visitor: "Harold Carol",
          date: "1 March",
          time: "12:00",
          method: "Online",
          status: "OUT",
        },
      ];

  return (
    <div className="table">
   <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">purpose</TableCell>
            <TableCell className="tableCell">visitor</TableCell>
            <TableCell className="tableCell">date</TableCell>
            <TableCell className="tableCell">time</TableCell>
            <TableCell className="tableCell">method</TableCell>
            <TableCell className="tableCell">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              >
             <TableCell className="tableCell">{row.id}</TableCell>
             <TableCell className="tableCell">{row.purpose}</TableCell>
             <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.visitor}
                </div></TableCell>
             <TableCell className="tableCell">{row.date}</TableCell>
             <TableCell className="tableCell">{row.time}</TableCell>
             <TableCell className="tableCell">{row.method}</TableCell>
             <TableCell className="tableCell">
                <span className={`status ${row.status}`} >{row.status}</span>
             </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Visit
