import React from "react";
import ReactDOM from "react-dom";

import {AnimatedSpriteSheet} from "./AnimatedSpriteSheet";

function PersonaCorriendo() {
    return (
        <AnimatedSpriteSheet
            filename="axe8.png"
            bounds={{ x: 0, y: 0, width: 1024, height: 489 }}
            speed={400}
            marcosPorFila={8}
            numeroFilas={3}
            marcosUltimaFila={6} />					
    )
}
function GatoCorriendo() {
    return (
        <AnimatedSpriteSheet
            filename="cat-running.png"
            bounds={{ x: 0, y: 0, width: 2048, height: 512 }}
            speed={400} 
            marcosPorFila={4} 
            numeroFilas={2}
            marcosUltimaFila={4}/>					
    )
}	
function Ninja() {
    return (
        <AnimatedSpriteSheet
            filename="billylee.png"
            bounds={{ x: 0, y: 0, width: 1010, height: 271 }}
            speed={400} 
            marcosPorFila={7}
            numeroFilas={2}	
            marcosUltimaFila={5} />					
    )
}
	
ReactDOM.render(<PersonaCorriendo />, document.getElementById('contenedor1'));
ReactDOM.render(<GatoCorriendo />, document.getElementById('contenedor2'));
ReactDOM.render(<Ninja />, document.getElementById('contenedor3'));