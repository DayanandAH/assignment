import React from 'react'


import './style.css'
function Table() {

  return (

    <div id="tab1"> 
      <div className="accored">
            <ol>
                    <li>My orders</li>
                    <li>Cancelled</li>
                    <li>Shipped</li>
                </ol>
            </div>
      <div id="tab2" className='md-6 xl-12 sm-2'>
<table align='center'  cellSpacing="60px"
cell-padding="10px">

<tr><th>Po</th><th>Customer Details</th><th>Order Type</th><th>City</th><th>Phone</th><th>Status</th></tr>

<tr><td>1212</td><td>124 keb main road bsk 3rd stage</td><td>Garage Door Install</td><td>Bangalore</td><td>9844523657</td><td>SC Sitecheck</td><td></td></tr>

<tr><td>3434</td></tr>

<tr><td>434</td></tr>

<tr><td>09809</td></tr>

</table>
</div>

    </div>
  )
}


export default Table