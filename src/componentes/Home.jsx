import React, { useState } from 'react'
import Conexion from '../service/Conexion'

const Home = () => {

    const [alumno, setAlumno] = useState({
        id:"",
        nombre:""
    })

    const change = (evento) =>{
        const value = evento.target.value
        setAlumno({...alumno, [evento.target.name]: value})
    }

    const agregarAlumno = (evento) =>{
        evento.preventDefault()
        Conexion.agregarAlumno(alumno).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div className=" bg-blue-400 flex max-w-2xl mx-auto shadow border-b-8 border-t-8">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Agregar alumno</h1>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-500 text-sm font-normal'>
                    Nombre de Alumno
                </label>
                <input
                 type="text"
                 name='nombre'
                 value={alumno.nombre}
                 
                 onChange={(evento) => change(evento)}
                 className='h-10 w-96 border wt-2 px-2 py-2' 
                 />
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button
                onClick={(evento) => agregarAlumno(evento)}
                className='rounded text-white font-semibold bg-green-400 py-2 px-2' 
                >
                    Guardar
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home