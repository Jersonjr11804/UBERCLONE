import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/navSlice';

const favorites = [
  { id: '1', icon: '🏠', label: 'Home',  description: 'Your home address' },
  { id: '2', icon: '💼', label: 'Work',  description: 'Your work address' },
];

const NavFavorites = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSelect = (item) => {
    dispatch(setDestination({ description: item.label, location: { lat: 0, lng: 0 } }));
    navigation.navigate('Ride');
  };

  return (
    <View style={styles.container}>
      {favorites.map(item => (
        <TouchableOpacity key={item.id} style={styles.row} onPress={() => handleSelect(item)}>
          <Text style={styles.icon}>{item.icon}</Text>
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:   { backgroundColor: '#fff', padding: 16 },
  row:         { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  icon:        { fontSize: 24, marginRight: 16 },
  label:       { fontSize: 15, fontWeight: '500' },
  description: { fontSize: 12, color: '#888' },
});

export default NavFavorites;