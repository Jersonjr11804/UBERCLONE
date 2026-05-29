import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PRICE_PER_KM = 2500;

const RideOption = ({ option, selected, onSelect, travelInfo }) => {
  const distance = travelInfo?.distance?.value ? travelInfo.distance.value / 1000 : 0;
  const price = (distance * PRICE_PER_KM * option.multiplier).toFixed(0);

  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.description}>{option.description}</Text>
      </View>
      <Text style={styles.price}>
        {distance > 0 ? `$${price}` : '--'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 10, marginBottom: 10 },
  selected:    { borderColor: '#000', backgroundColor: '#f5f5f5' },
  title:       { fontSize: 16, fontWeight: '600' },
  description: { fontSize: 12, color: '#888', marginTop: 2 },
  price:       { fontSize: 16, fontWeight: '700' },
});

export default RideOption;