import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import RideOption from '../components/RideOption';
import Map from '../components/Map';

const rideOptions = [
  { id: '1', title: 'Económico', multiplier: 1,   description: 'Affordable rides' },
  { id: '2', title: 'XL',       multiplier: 1.5, description: 'Extra space' },
  { id: '3', title: 'Premium',  multiplier: 2,   description: 'Top-rated drivers' },
];

const RideScreen = () => {
  const [selected, setSelected] = useState(rideOptions[0]);
  const travelInfo = useSelector((state) => state.nav.travelTimeInfo);

  return (
    <View style={styles.container}>
      <Map />
      <ScrollView style={styles.panel}>
        <Text style={styles.title}>Choose a ride</Text>
        {travelInfo && (
          <Text style={styles.info}>{travelInfo.distance?.text} · {travelInfo.duration?.text}</Text>
        )}
        {rideOptions.map(option => (
          <RideOption
            key={option.id}
            option={option}
            selected={selected.id === option.id}
            onSelect={() => setSelected(option)}
            travelInfo={travelInfo}
          />
        ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request {selected.title}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:  { flex: 1 },
  panel:      { backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 20 },
  title:      { fontSize: 20, fontWeight: '600', marginBottom: 4 },
  info:       { color: '#666', marginBottom: 16 },
  button:     { backgroundColor: '#000', padding: 16, borderRadius: 8, alignItems: 'center', margin: 16 },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

export default RideScreen;