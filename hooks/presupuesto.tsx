import { useState } from "react";

export const usePresupuesto = () =>{
    const [presupuesto, setPresupuesto] = useState('');
    const [presupuestoRestante, setPresupuestoRestante] = useState('');
    const [mostrarPresupuestoModal, setMostrarPresupuestoModal] = useState(true);
    const [mostrarGastoModal, setMostrarGastoModal] = useState(false);
    const [inputPresupuesto, setInputPresupuesto] = useState('');
    const [inputGasto, setInputGasto] = useState('');
    const [verArticulo, setVerArticulo] = useState(false);

    const confirmarPresupuesto = () =>{
        const valor = parseFloat(inputPresupuesto);
        if(isNaN(valor) || valor > 0) {
            setPresupuesto(valor.toFixed(2));
            setPresupuestoRestante(valor.toFixed(2));
            setMostrarPresupuestoModal(false);
        } else {
            alert ('Ingresa un presupuesto mayor a 0');
        }
    };

    const registrarGasto = () => {
        const gasto = parseFloat(inputGasto);
        const restante = parseFloat(presupuestoRestante);
        if(isNaN(gasto) || gasto <= restante){
            const nuevoRestante = restante - gasto;
            setPresupuestoRestante(nuevoRestante.toFixed(2));
            setMostrarGastoModal(false);
            setInputGasto('');
        } else {
            alert ("Gasto invalido o mayor al presupuesto inicial");
        }
    };

    return {
        presupuesto,
        presupuestoRestante,
        mostrarPresupuestoModal,
        mostrarGastoModal,
        inputPresupuesto,
        inputGasto,
        verArticulo,
        setInputPresupuesto,
        setInputGasto,
        setMostrarPresupuestoModal,
        setMostrarGastoModal,
        setVerArticulo,
        confirmarPresupuesto,
        registrarGasto,
    }
}