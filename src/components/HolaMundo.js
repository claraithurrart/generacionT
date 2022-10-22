import React from "react";

function HolaMundo (props){

    function newAler(){
        alert ("Boton!");
    }
    const {name}= props; 
    const {apellido}= props;
 return (
   <><p>Hola soy React app de  {name} {apellido} </p>
   <button onClick= {newAler}></button>
   </>
 );

}

export default HolaMundo; 