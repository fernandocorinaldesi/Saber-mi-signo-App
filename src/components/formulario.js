import React from 'react'
import "../css/formulario.css";

export default function formulario(props) {
    const {handlechange,handleclick}=props;
    return (
        <div className="formulario">
            <label > Averiguar mi signo : </label>
            <input onChange={handlechange} type="date" ></input>
            <button onClick={handleclick}><span>Enviar</span></button>
        </div>
    )
}
