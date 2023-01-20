import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Searchbar = (props) => {


  return (
    <div className='flex p-3 bg-white mr-8 ml-16 shadow-lg rounded'>
        <div id="searchInput" className='flex'>
            <div className='flex mx-1 border-2 border-gray-500 rounded bg-gray-100'>
                <input className='focus:outline-none ring-0 rounded pl-2 bg-gray-100' type="text" placeholder='Buscar...' 
                onChange={(e) => props.search(e.target.value)}/>
                <div className='bg-orange-500 hover:cursor-pointer hover:bg-orange-600 justify-center'>
                    <FontAwesomeIcon className='px-2 text-white' icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>

        <div className='ml-1'>
            <button className='border-2 focus:border-orange-500 bg-slate-100 px-2 pb-1 pt-1 rounded group'>
                Insertar  <FontAwesomeIcon icon={faChevronDown} className="pt-1" />
                <div className='absolute hidden group-hover:block bg-white shadow-md mt-1 rounded'>
                    <ul className='text-left border rounded'>
                        <Link to="/add-solicitante" ><li className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >Solicitante</li></Link>
                        <Link to="/add-doctorando" ><li className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >Doctorando</li></Link>
                        <Link to="/add-doctor" ><li className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >Doctor</li></Link>
                    </ul>
                </div>
            </button>
            
        </div>
        {/* <div className='ml-1'>
            <button className='bg-slate-100 border-2 border-gray-500 px-2 pb-1 rounded'>Insertar</button>
        </div> */}
    </div>
  )
}

export default Searchbar