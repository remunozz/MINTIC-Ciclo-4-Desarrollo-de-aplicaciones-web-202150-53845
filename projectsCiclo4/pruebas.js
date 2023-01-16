const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => { 
    
    let porcentajeCO = limiteCO ?  + (valorCO * 100 / limiteCO).toFixed(2) : 0;
    let porcentajeCO2 = limiteCO2 ? + valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ?  + valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ?  + valorO2 * 100 / limiteO2 : 0;
  
    return {porcentajeCO: `${porcentajeCO}%`, porcentajeCO2: `${porcentajeCO2}%`, porcentajeHC: `${porcentajeHC}%`, porcentajeO2: `${porcentajeO2}%`};
}

const registrarCO = (value) => {
    let verificacionRangoCO;
    rangosCO.forEach(element => {
        if(value >= element.de && value <= element.hasta){
            verificacionRangoCO = element.etiqueta;
        }
    });
    
    return value >= rangosCO[0].de ? value<=rangosCO[0].hasta? rangosCO[0].etiqueta: rangosCO[1].etiqueta : 'fuera_de_rango';
}

global.rangosCO = [
    {etiqueta:'Parametro CO en rango estandar', de: 0, hasta: 10},
    {etiqueta:'Parametro CO fuera de rango', de: 11, hasta: 15},
]

/*const funcion = (x )=> {
    return x >=0? rangosCO [0].etiqueta : 'fuera_de_rango';   
}*/


console.log(registrarCO(11));

