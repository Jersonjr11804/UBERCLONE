import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('es');

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSave = () => {
    if (!name || !phone || !email || !gender) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (name.length > 50) {
      Alert.alert('Error', 'Name must be 50 characters max');
      return;
    }
    if (isNaN(Number(phone))) {
      Alert.alert('Error', 'Phone must be numeric');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Enter a valid email');
      return;
    }
    Alert.alert('Success', 'Profile saved');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Personal data</Text>
      <TouchableOpacity style={styles.photoBox}>
        <Text style={styles.photoText}>📷 Photo</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Full name (max 50 chars)" maxLength={50} value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Phone number" keyboardType="numeric" value={phone} onChangeText={setPhone} />
      <Picker selectedValue={gender} onValueChange={setGender} style={styles.input}>
        <Picker.Item label="Select gender..." value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <Picker selectedValue={language} onValueChange={setLanguage} style={styles.input}>
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="English" value="en" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:  { padding: 20, backgroundColor: '#fff' },
  title:      { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  photoBox:   { alignItems: 'center', justifyContent: 'center', height: 100, width: 100, borderRadius: 50, backgroundColor: '#eee', alignSelf: 'center', marginBottom: 20 },
  photoText:  { fontSize: 12, color: '#666' },
  input:      { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 14 },
  button:     { backgroundColor: '#000', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

export default ProfileScreen;