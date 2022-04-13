import React from 'react'
import { Outlet } from 'react-router-dom';
import {Link} from 'react-router-dom';
const  Tabs=()=> {
  return (
    <div>Tabs
      hlo this is tab page
      <Link to='/tabs/tab1'>for Tab</Link>
      <Outlet />
    </div>
  )
}
export const Tabs1=()=>{
  return(
    <>
    <p>Tabs2 </p>
    <Link to='/tabs/tab1/dhakal'>For family</Link>
   <Outlet />
    <p>Tabs3 </p>
    <p>Tabs4  </p>
    <p>Tabs5 </p>
    
    </>
  )
}
export const Family=()=>{
  return(
    <>
    <p>Asmita dhakal </p>
    <p>Rita Dhakal</p>
    <p>Bibek Dhaka </p>
    <p>Tabs5 </p>
    
    </>
  )
}

export default Tabs