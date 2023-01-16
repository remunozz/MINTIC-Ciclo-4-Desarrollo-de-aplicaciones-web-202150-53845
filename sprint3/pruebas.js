import fetch from "node-fetch";

const calcularPocentajes = async (valorCO, valorCO2, valorHC, valorO2) => { 
    try {
        let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/limits');
        let limits = await response.json();
       
        let limiteCO = limits['Parametro CO en rango estandar'];
        let limiteCO2 = limits['Parametro CO2 en rango estandar'];
        let limiteHC = limits['Parametro HC en rango estandar'];
        let limiteO2 = limits['Parametro O2 en rango estandar'];  

        let porcentajeCO = limiteCO ?  + (valorCO * 100 / limiteCO).toFixed(2) : 0;
        let porcentajeCO2 = limiteCO2 ? + (valorCO2 * 100 / limiteCO2).toFixed(2) : 0;
        let porcentajeHC = limiteHC ?  + (valorHC * 100 / limiteHC).toFixed(2) : 0;
        let porcentajeO2 = limiteO2 ?  + (valorO2 * 100 / limiteO2).toFixed(2) : 0;
            
        return {porcentajeCO : porcentajeCO , porcentajeCO2 : porcentajeCO2 , porcentajeHC : porcentajeHC , porcentajeO2: porcentajeO2};
    } catch (error) {
        console.log(error);
    }
}   

const registrarCO = async (value) => {
    try {
        let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
        let rangosCO = await response.json();
       
        let candidate = rangosCO[0];
        let enRango = 'Parametro CO en rango estandar';
        let fueraDeRango = 'Parametro CO fuera de rango';

        let indiceRangosCO = -1;
        rangosCO.forEach((element, indexElement) => {
            console.log(element, indexElement);
            if((value >= element.de && value <= element.hasta)&&(element.etiqueta === 'Monoxido de carbono')){
                indiceRangosCO = indexElement;
            }
        });
        
        //return value >= rangosCO[0].de ? value<=rangosCO[0].hasta? rangosCO[0].etiqueta: rangosCO[1].etiqueta : 'fuera_de_rango';
        return indiceRangosCO === 0 ? enRango : fueraDeRango;
    } catch (error) {
        console.log(error);
    }   
}  

calcularPocentajes(0, 15, 9000, 14).then(dataPorcentajes=>console.log(dataPorcentajes));
//registrarCO(-1).then(dataRegistroCO=>console.log(dataRegistroCO));
registrarCO(14).then(dataRegistroCO=>console.log(dataRegistroCO));
