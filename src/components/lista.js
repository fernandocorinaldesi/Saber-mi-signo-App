import React from 'react'
import "../css/lista.css";

export default function lista(props) 
{
    const {signoslista,handler}=props;
    const signos=signoslista.map((e,i)=>{
       return <img onClick={handler} className="image" src={e.imagen} height="15%" width="15%" alt=""
       title={e.signo}
       value={e.signo}
       key={i} />
      });
    return (
        <div className="image-container tooltip">{signos}</div>
       
    )
}
