import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../redux/navSlice';
import NavFavorites from '../components/NavFavorites';
import Map from '../components/Map';

const HomeScreen = () => {
  const dispatch = useDispatch();
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