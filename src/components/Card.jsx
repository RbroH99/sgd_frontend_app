import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  
   const bgpicker = (type) =>{
    if(type==="Solicitantes"){
      return "bg-orange-400";
    }else if(type === "Doctorandos"){
      return "bg-orange-500";
    }else if(type==="Doctores"){
      return "bg-red-500";
    }else{
      return "bg-blue-500";
    }
   }

  return (
    <div className='flex bg-white rounded p-5 w-60 shadow-lg '>
        <div id='icon' className={` p-3 px-4 rounded-full w-15 h-12 ${bgpicker(props.type)} text-white`}>
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <div id='info' className='ml-3'>
            <h1 className=' font-bold text-lg'>{props.cant}</h1>
            <span>{props.type}</span>
        </div>
    </div>
  )
}

export default Card