import React from 'react'
import "../css/signoelegido.css";

export default function misigno(props) {
    const { signoelegido, show } = props;
    var signomostrar;
    if (show) {
        signomostrar = signoelegido.map((e, i) => {
            return <div className="signo-container" key={i}>
                <div className="title-info">
                    <h2>Tu signo es {e.signo}</h2>
                    <p>{e.info}</p>
                </div>
                <div className="caractetisticas-list">
                    <p>Elemento: <span>{e.elemento}</span></p>
                    <p>Cualidad: <span>{e.cualidad}</span></p>
                    <p>Color: <span>{e.color}</span></p>
                    <p>Dia: <span>{e.dia}</span></p>
                    <p>Regente: <span>{e.regente}</span></p>
                    <p>Mayor compatibilidad con: <span>{e.mayorc}</span></p>
                    <p>Mejor pareja con: <span>{e.mejorp}</span></p>
                    <p>Numeros de la suerte: <span>{e.numerosSuerte}</span></p>
                    <p>Rango de nacimiento: <span>{e.fecha}</span></p>
                </div>
            </div>

        })
    }
    else {
        signomostrar = signoelegido.map((e, i) => {
            return <div className="title-info" key={i}>
                <h2>{e.signo}</h2>
                <p>{e.info}</p>
            </div>
        })

    }

    return (
        signomostrar
    )
}
