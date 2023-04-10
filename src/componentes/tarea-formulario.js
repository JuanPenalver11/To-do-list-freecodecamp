import React from "react";
import '../hojas-de-estilo/tarea-formulario.css'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function TareaFormulario(props) {

    const [input, setinput] = useState('');

    const manejarCambio = e => {
        setinput(e.target.value);

    };

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4 () ,
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva);   
    };

    return (

        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>

            <input
                className='tarea-input'
                type='text'
                placeholder='Añade tu tarea'
                name='texto'
                onChange={manejarCambio}
            />

            <button className='tarea-boton'>

                Agregar tarea


            </button>

        </form>


    );

}

export default TareaFormulario;