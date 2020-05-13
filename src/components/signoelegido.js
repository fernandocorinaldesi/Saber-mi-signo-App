import React from 'react'
import "../css/signoelegido.css";

export default function misigno(props) {
    const {signoelegido}=props;
    const signomostrar=signoelegido.map(e=>{
        return <div>
            <h2>{e.signo}</h2>
            <p>{e.info}</p>
        </div>
    
    })
    return (
    signomostrar 
    )
}
