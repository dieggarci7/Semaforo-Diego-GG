import React  from "react";
import { useState } from "react";


const semaforo = () =>{
    
    const [ color, setColor ] = useState("red");
    const [isVisible, setIsVisible] = useState(false);

    const purpleDiv =()=>{
        setIsVisible(!isVisible)
    };


    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <div className="poste"></div>
            <div className="panelLuces">
                <div onClick={()=>setColor("red")} className={`redLight ${color === "red" ? " brillo" : "" }`}></div>
                <div onClick={()=>setColor("yellow")} className={`yellowLight ${color === "yellow" ? "brillo" : ""}`}></div>
                <div onClick={()=>setColor("green")} className={`greenLight ${color=== "green" ? "brillo" : ""}`}></div>
                {isVisible && <div onClick={()=>setColor("blueviolet")} className={`purpleLight ${color=== "blueviolet" ? "brillo" : ""}`}></div>}
            </div>
        <div>
            <button className="boton" onClick={purpleDiv}>
            {isVisible ? "Ocultar" : "Mostrar"}</button>
        </div>
        </div>
    )
}


export default semaforo
