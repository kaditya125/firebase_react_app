import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
       <div style={{width:'30%',backgroundColor:'royalblue',height:'100vh'}}>
         <Link to= '/addStudent' style={{color:'white',display:'block'}}> Add Student</Link>
         <Link to= '/studentList' style={{color:'white',display:'block'}}> Student List</Link>
         <Link to='/updatestudent' style={{color:'white', display:'block'}}>Update Student</Link>

       </div>
       <div style={{width:'70%',height:'100vh'}}>
         <Outlet/>
       </div>
    </div>
  )
}

export default Dashboard