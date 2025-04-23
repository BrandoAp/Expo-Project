import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../imagenes/logo.jpeg')} style={styles.image} />

      <Text style={styles.pinkText}>¡Bienvenido al Gestor de gastos!</Text>
      <Text style={styles.pinkclaroText}>
        Gestor de gastos es una aplicación para controlar los gastos de una manera rápida y sencilla
      </Text>

      <Link href="/pantalla2" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  pinkText: {
    color: '#FF007F',
    fontSize: 20,
    marginBottom: 10,
  },
  pinkclaroText: {
    color: '#FFB6C1',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FFB6C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FF007F',
    fontSize: 18,
    textAlign: 'center',
  },
});
