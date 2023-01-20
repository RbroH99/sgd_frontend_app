import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faBell} from "@fortawesome/free-regular-svg-icons";


export const Navbar = () => {
  return (
    <div id='navbar' className='flex bg-white p-3 mb-2 shadow-lg justify-end'>
        <div className='flex pr-4'>  
          <div id='userArea' className='flex px-3 py-1 hover:cursor-pointer hover:bg-gray-100 hover:text-orange-500 rounded ease-out duration-300'>
            <div>User Placeholder</div>
            <div className=''><FontAwesomeIcon icon={faUser} className='text-xl pl-2' /></div>
          </div>    
          <div id='notifications' className='px-1 hover:cursor-pointer hover:bg-gray-100 hover:text-orange-500 rounded ease-out duration-300'><FontAwesomeIcon icon={faBell} className="p-1 pt-2" /></div> 
        </div>
    </div>
  )
}
