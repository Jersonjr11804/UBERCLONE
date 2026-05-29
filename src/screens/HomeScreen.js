import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavFavorites from '../components/NavFavorites';
import Map from '../components/Map';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <NavFavorites />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;