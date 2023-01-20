import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import "./styles.css"
import { json, Link, redirect } from 'react-router-dom'
import axios from 'axios'

const Adddoctorando = () => {
 


    const [ci, setCi] = useState()
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [sexo, setSexo] = useState("M")
    const [direccion, setDireccion] = useState("")
    const [sector_est, setSector_est] = useState()
    const [grado, setGrado] = useState("Grado")
    const [area_uni, setArea_uni] = useState(["Área Universidad", 0])
    const [area_con, setArea_con] = useState(["Área Conocimiento", 0])
    const [telefono, setTelefono] = useState()
    const [email, setEmail] = useState()
    const [no_solapin, setNo_solapin] = useState()
    const [procedencia, setProcedencia] = useState()
    const [programa, setPrograma] = useState()
    const [fotop, setFotop] = useState()
    const [au, setAU] = useState([])
    const [ac,setAC] = useState([])
    const [controlWithErrors, setcontrolWithErrors] = useState([])
    const is_doctorando = true;


    const verifySetErrors = (val) => {
        if (!controlWithErrors.includes(val)) {
            setcontrolWithErrors((preVal) => [...preVal, val])
        }
    }

    const validateTextInput = (intext) => {
        const numb = [0,1,2,3,4,5,6,7,8,9];

        for(const i in numb) {
            if(intext.includes(i)){
                return false;
            }
        }
        return true;

    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/area_universidad/", {
          method: "GET",
          headers: {
          },
        })
          .then((resp) => resp.json())
          .then((res) => {
            setAU(res);
          })
          .catch((error) => console.log(error));

          fetch("http://127.0.0.1:8000/api/area_conocimiento/", {
          method: "GET",
          headers: {
          },
        })
          .then((resp) => resp.json())
          .then((res) => {
            setAC(res);
          })
          .catch((error) => console.log(error));
        }, []);

        const handleSubmit = (event,p) => {
            event.preventDefault()
            if(p){
                const uploadData = new FormData();
                uploadData.append('ci', ci);
                uploadData.append('nombre',nombre);
                uploadData.append('apellidos',apellidos);
                uploadData.append('sexo', sexo);
                uploadData.append('direccion',direccion);
                uploadData.append('sector_est',sector_est);
                uploadData.append('email',email);
                uploadData.append('grado',grado);
                uploadData.append('telefono',telefono);
                uploadData.append('no_solapin', no_solapin);
                uploadData.append('procedencia',procedencia);
                uploadData.append('programa',programa);
                uploadData.append('area_uni',area_uni[1]);
                uploadData.append('area_con',area_con[1]);
                uploadData.append('fotop',fotop);
                uploadData.append('is_doctorando',is_doctorando);

                try {
                    axios.post("http://127.0.0.1:8000/api/profesional/",uploadData);
                    redirect('/');
                } catch (error) {
                    
                }
            }
        }

    return (

    <div className=''>
        <div className='"text-gray-800 text-2xl font-semibold ml-7'>Insertar persona</div>
        <div id='popup' className='flex justify-center bg-white rounded p-5 m-7 mt-5 shadow-lg'>
            <div id='popup-inner' className='flex'>
                <div>
                    <form onSubmit={event => handleSubmit(event,false)}>
                    <input 
                        id='formdoctorando'
                        type="text" 
                        name='nombre' 
                        placeholder='Nombre' 
                        className={`m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400 ${controlWithErrors.includes('nombre') ? "input-error" : ""}`} 
                        onChange={e => {validateTextInput(e.target.value) ? setNombre(e.target.value) : verifySetErrors("nombre") }}
                    />
                    
                    <input 
                        type="text" 
                        name='apellidos' 
                        placeholder='Apellidos' 
                        className={`m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400 ${controlWithErrors.includes('apellidos') ? "input-error" : ""}`} 
                        onChange={e => {validateTextInput(e.target.value) ? setApellidos(e.target.value) : verifySetErrors("apellidos") }}
                    />
                    
                    <input 
                        type="number"
                        value={ci}
                        maxLength={11} 
                        name='ci' 
                        placeholder='Ci' 
                        className='mr-8 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => { 
                            if ( e.target.value.length <= 11){
                                setCi(e.target.value);
                            }
                         }}
                    />
                    Sexo: 
                    <input 
                        type="radio" 
                        name="sexo" 
                        className='ml-2 mr-1' onClick={value => {value.target.checked && setSexo('M')} }
                    />M

                    <input 
                        type="radio" 
                        name="sexo" 
                        className='ml-2 mr-1' 
                        onClick={value => {value.target.checked && setSexo('F')} }
                    />F
                    <br />

                    <input 
                        type="text" 
                        name='dir' 
                        placeholder='Dirección' 
                        className='w-96 mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setDireccion(e.target.value)} 
                    />

                    <input 
                        type="email" 
                        name='Email' 
                        placeholder='Email, ejemplo@do.com' 
                        className='w-64 ml-2.5 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <input 
                        type="tel" 
                        name='telefono'
                        placeholder='Teléfono' 
                        className='w-max ml-4 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setTelefono(e.target.value)} 
                    />
                    <br />

                    <input 
                        name='fotop'
                        onChange={(e) => setFotop(e.target.files[0])}
                        type="file" 
                        className='mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400'
                    />

                    <button className='border-2 border-gray-200 focus:border-blue-300 bg-gray-100 px-2 pb-1 pt-1 rounded group'>
                        <div>{area_uni[0]} <FontAwesomeIcon icon={faChevronDown}  className="pt-1" /></div> 
                        <div className='h-32 overflow-y-scroll overflow-x-hidden absolute hidden group-focus:block bg-white shadow-md mt-1 rounded'>
                            <ul className='text-left border rounded'>
                            {au.map((auni) => {
                                return (
                                    <li id={auni.id} key={auni.id} onClick={e => setArea_uni([e.target.innerText, "http://127.0.0.1:8000/api/area_universidad/"+e.target.id+"/"]) } className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >{auni.nombre}</li>
                             );
                             })}

                                <li className=' w-full absolute hidden group-focus:block px-4 py-1 bg-orange-500 rounded-b text-white hover:bg-orange-700 border-b'>Añadir</li>   
                            </ul>
                        </div>
                    </button>
                    <button className='ml-3 border-2 border-gray-200 focus:border-blue-300 bg-gray-100 px-2 pb-1 pt-1 rounded group'>
                        {area_con[0]}  <FontAwesomeIcon icon={faChevronDown} className="pt-1" />
                        <div className='h-32 overflow-y-scroll overflow-x-hidden absolute hidden group-focus:block bg-white shadow-md mt-1 rounded group'>
                            <ul className='text-left border rounded'>
                            {ac.map((acon) => {
                                return (
                                    <li id={acon.id} key={acon.id} onClick={e => setArea_con([e.target.innerText, "http://127.0.0.1:8000/api/area_conocimiento/"+e.target.id+"/"]) } className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >{acon.nombre}</li>
                             );
                             })}

                             <li className=' w-full absolute hidden group-focus:block px-4 py-1 bg-orange-500 rounded-b text-white hover:bg-orange-700 border-b'>Añadir</li>    
                            </ul>
                        </div>
                    </button>

                    <button className='ml-3 border-2 border-gray-200 focus:border-blue-300 bg-gray-100 px-2 pb-1 pt-1 rounded group'>
                        {grado}  <FontAwesomeIcon icon={faChevronDown} className="pt-1" />
                        <div className='absolute hidden group-focus:block bg-white shadow-md mt-1 rounded group'>
                            <ul className='text-left border rounded'>
                                    <li onClick={e =>  setGrado(e.target.innerText) } className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >Graduado</li> 
                                    <li onClick={e =>  setGrado(e.target.innerText) } className='px-4 py-1 hover:bg-gray-100 hover:text-orange-500 border-b' >Doctor</li> 
                            </ul>
                        </div>
                    </button>


                    <input 
                        type="text"
                        name='dir' 
                        placeholder='Sector' 
                        className='w-32 p-1 mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setSector_est(e.target.value)}
                    />

                    <input 
                        type="text" 
                        name='dir' 
                        placeholder='Solapín' 
                        className='w-32 p-1 mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setNo_solapin(e.target.value)}
                    />

                    <input 
                        type="text" 
                        name='dir' 
                        placeholder='Procedencia' 
                        className='w-32 p-1 mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setProcedencia(e.target.value)}
                    />

                    <input 
                        type="text" 
                        name='dir' 
                        placeholder='Programa' 
                        className='w-32 p-1 mr-2 m-2 border-2 bg-slate-100 rounded text-gray-700 focus:outline-blue-400' 
                        onChange={e => setPrograma(e.target.value)}
                    />
                    <br />

                    <div className='flex place-content-end'>
                        <div className='mr-2 mt-5'>
                            <Link to={'/'}>
                                <button
                            className='shadow-lg bg-red-500 rounded-full px-2 mx-0 hover:cursor-pointer hover:bg-red-600 text-white text-lg'
                                >Cancelar</button>
                            </Link>
                        </div>
                             
                        <div className='mr-10 mt-5'>
                            <input
                                value={"Añadir"}  
                                type="submit" 
                                className='shadow-lg bg-orange-500 rounded-full px-4 mx-0 hover:cursor-pointer hover:bg-orange-600 text-white text-lg'
                                onClick={event => handleSubmit(event,true)}/>
                        </div>
                    </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Adddoctorando