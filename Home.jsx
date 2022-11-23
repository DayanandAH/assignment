

import HelpIcon from '@mui/icons-material/Help';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import {Link} from 'react-router-dom'
import Table from './table'
export default function Home() {
  return (
    <div className='maind'>
       
     <div className="nav1">
         <div className="logo">
            <p> f1 studioz</p>
         </div>
       
         <div className='subnav' >
         <AppsIcon/>
         <NotificationsIcon/>
         <HelpIcon/>
         </div>
        </div>
        <div className="nav2">
         <ul>
         <li><Link to="/My Orders">MY ORDERS</Link></li>
         <li>WHAT'S NEW </li>
         </ul>

        </div>
       
            
            <div className="tab">
        
        
        </div>
        </div>
  )
}
