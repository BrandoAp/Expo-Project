import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import InputComponent from '@/components/inputComponent';
import { usePresupuesto } from '@/hooks/presupuesto';

const Pantalla2 = () => {
  const {
    presupuesto,
    presupuestoRestante,
    mostrarGastoModal,
    mostrarPresupuestoModal,
    inputPresupuesto,
    inputGasto,
    verArticulo,
    setInputGasto,
    setInputPresupuesto,
    setMostrarGastoModal,
    setMostrarPresupuestoModal,
    setVerArticulo,
    confirmarPresupuesto,
    registrarGasto,
  } = usePresupuesto();

  return (
    <ImageBackground
      source={require('../imagenes/fondo2.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* ventana Modal para presupuesto */}
        <Modal visible={mostrarPresupuestoModal} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.label}>¿Cuál es tu presupuesto semanal?</Text>
              <InputComponent
                value={inputPresupuesto}
                onChangeText={setInputPresupuesto}
                placeholder='Ej: 100.00'
                keyboardType='numeric'
              />
              <TouchableOpacity 
                onPress={confirmarPresupuesto} 
                style={styles.botonGasto}>
                <Text style={styles.botonTexto}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* ventana Modal para gasto */}
        <Modal visible={mostrarGastoModal} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.label}>¿Cuánto has gastado?</Text>
              <InputComponent
                value={inputGasto}
                onChangeText={setInputGasto}
                placeholder='Ej: 100.00'
                keyboardType='numeric'
              />
              <TouchableOpacity onPress={registrarGasto} 
                style={styles.botonGasto}>
                <Text style={styles.botonTexto}>Registrar gasto</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* lo que aparece en la pagina */}
        {presupuesto !== '' && (
          <>
            <Text style={styles.tituloSuperior}>Control de tu presupuesto</Text>
            <Text style={styles.presupuestoTexto}>${presupuestoRestante}</Text>
            <Text style={styles.textoInfo}>
              Este es tu presupuesto semanal. Abajo, agrega tus gastos.
            </Text>

            <TouchableOpacity
              style={styles.botonGasto}
              onPress={() => setMostrarGastoModal(true)}
            >
              <Text style={styles.botonTexto}>Registrar gasto</Text>
            </TouchableOpacity>

            <Text style={styles.textoInfo}>¿Quieres ver el aporte del artículo 177?</Text>
            <TouchableOpacity
              style={styles.botonVer}
              onPress={() => setVerArticulo(!verArticulo)}
            >
              <Text style={styles.botonTexto}>Ver</Text>
            </TouchableOpacity>

            {verArticulo && (
              <Text style={styles.articuloTexto}>
                El artículo 177 establece que el Beneficio Definido del Componente
                 de Viudez será equivalente al 50% de la pensión de vejez o invalidez
                  que recibía o le habría correspondido al causante al momento de fallecer. 
                  Esta pensión se pagará por un período de cinco años desde la fecha del fallecimiento, 
                  salvo que la viuda o el viudo esté en condición de invalidez o tenga hijos del causante 
                  con derecho a pensión, en cuyo caso se seguirá pagando mientras se mantengan esas condiciones.
                   Por su parte, el artículo 181 señala que en el Subsistema Mixto, el monto personal del Beneficio
                    Definido correspondiente a la pensión de viudez será una 
                suma fija de quinientos balboas (B/. 500.00), siempre que el asegurado participara en dicho componente.
              </Text>
            )}
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Pantalla2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#ffffffcc', // Fondo blanco con transparencia
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tituloSuperior: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FF007F',
    marginBottom: 10,
    textAlign: 'center',

  },
  presupuestoTexto: {
    fontSize: 67,
    fontWeight: 'bold',
    color: '#FF007F',
    marginBottom: 10,
    marginTop: 50,

  },
  textoInfo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  botonGasto: {
    backgroundColor: '#FFB6C1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 70,
  },
  botonCancelar: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },  
  botonVer: {
    backgroundColor: '#FFD1DC',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
  botonTexto: {
    color: '#FF007F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  articuloTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFB6C1',
    padding: 2,
    borderRadius: 8, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});
