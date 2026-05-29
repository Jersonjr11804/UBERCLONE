import React from 'react';
import { StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* Controla el color de la barra de estado superior (hora, batería, etc) */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container, 
      { paddingTop: insets.top, paddingBottom: insets.bottom }
    ]}>
      
      {/* Contenedor temporal de tu mapa estilo Uber */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Aquí se renderizará el mapa en tiempo real</Text>
        <Text style={styles.subText}>[Maps SDK for Android]</Text>
      </View>

      {/* Contenedor temporal para el buscador de direcciones */}
      <View style={styles.searchContainer}>
        <Text style={styles.destinationText}>¿A dónde vas, Jose?</Text>
        <View style={styles.fakeInput}>
          <Text style={styles.inputText}>Introduce tu destino...</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro elegante
  },
  mapPlaceholder: {
    flex: 2, // Toma la mayor parte de la pantalla para el mapa
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
  },
  mapText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    color: '#00cc66', // Color verde simulando GPS o éxito
    fontSize: 14,
    marginTop: 5,
  },
  searchContainer: {
    flex: 1, // Espacio inferior para el buscador e historial
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  destinationText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  fakeInput: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
  },
  inputText: {
    color: '#777',
    fontSize: 16,
  },
});

export default App;