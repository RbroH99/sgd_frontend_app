import React, { useState } from "react";
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {

  const showAlert = (string) => {
    alert(string);
  }

  const deletePerson = async (id) => {
    

      try {
        await fetch(("http://127.0.0.1:8000/api/profesional/"+id+"/"), {
        method: "DELETE",
        headers: {
        },
        });
        showAlert("Eliminado exitosamente")
        if(props.onDeletePerson){
          props.onDeletePerson(id)
        }
      } catch (error) {
        console.log(error)
        showAlert("No se pudo eliminar")
      }
  }
  
  const determineCat = (x,y,z) => {
    if(x){
      return "Solicitante";
    }else if(y){
      return "Doctorando";
    }else if(z){
      return "Doctor";
    }else{
      return "Desconocido"
    }
  }

  const asignateBg = (x,y,z) => {
    if(x){
      return "solicitantes";
    }else if(y){
      return "doctorandos";
    }else if(z){
      return "doctores";
    }
  }

  return (
    <div className="mr-8 overflow-y-hidden">
      <table className="w-full shadow-lg">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 flex justify-center text-sm font-semibold tracking-wide text-left"><div>Id</div></th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Apellidos</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Ci</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Categoría</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
          </tr>
        </thead>
        <tbody>

          {props.personas.filter((value) =>{
            if(props.search === ""){
              return value
            }else if(value.nombre.toLowerCase().includes(props.search.toLowerCase())){
              return value
            }else if(value.apellidos.toLowerCase().includes(props.search.toLowerCase())){
                return value
            }else{
              return ""
            }
          }).map((person) => {
            return (

              <tr key={person.id} className='border-b'>
                <td key={person.id} className='w-16 bg-white p-3 text-sm text-gray-800'>
                  <div className="flex">
                    <div  id={person.fotop} className="ml-2 font-semibold text-base hover:cursor-pointer">{person.id}</div>
                    <div className="ml-3 mr-0 w-10 h-10 overflow-hidden rounded-full flex"><img src={person.fotop} alt=""/></div>
                  </div>
                </td>
                <td key={person.id} className='ml-0 bg-white p-3 text-sm text-gray-800 flex-row'><div className="font-semibold text-gray-900">{person.nombre}</div><span className="flex-row text-xs">{person.email}</span></td>
                <td key={person.id} className='bg-white p-3 text-sm text-gray-800'>{person.apellidos}</td>
                <td key={person.id} className='bg-white p-3 text-sm text-gray-800'>{person.ci}</td>
                <td key={person.id} className='bg-white p-3 text-sm text-gray-900 '><div className={`text-white font-semibold w-min ${asignateBg(person.is_solicitante, person.is_doctorando,person.is_doctor)}`} >{determineCat(person.is_solicitante, person.is_doctorando,person.is_doctor)}</div></td>
                <td key={person.id} className='bg-white p-3 text-sm text-gray-800'>
                  <div>
                    <div id={person.id} onClick={(e) => deletePerson(person.id)} className=" ease-out duration-200  rounded">
                      <FontAwesomeIcon icon={faTrash}
                        className='text-gray-700 hover:text-red-500 hover:cursor-pointer' />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
