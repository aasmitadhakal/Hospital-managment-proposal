import React from 'react';
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div>
     <nav>
       <ul>
        <Link to ='/dashboard'>Dashboaard</Link>
        <Link to ='/tabs'>Tabs</Link>
        <Link to ='/rouutes'>Routes</Link>
        <Link to ='/innercontent'>innercontent</Link>
       </ul>
     </nav>
    </div>
  )
}

export default Sidebar