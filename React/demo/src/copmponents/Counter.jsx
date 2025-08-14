import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 
const Contacts = () => {
  return (
    <div>
        <h2> Contact Us</h2>
        <table className='table'>
          <tr>
             <td width={250}>
              <ul>
                <li><Link to="gurugram"> Gurugram</Link></li>
                <li><Link to="mumbai"> Mumbai</Link></li>
                <li><Link to="banglore"> Banglore</Link></li>
              </ul>
             </td>
             <td>
                <Outlet />
             </td>
          </tr>
        </table>
    </div>
  )
}
 
export default Contacts