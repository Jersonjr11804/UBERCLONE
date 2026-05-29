import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const paymentMethods = [
  { id: 'stripe',      label: '💳 Credit / Debit card (Stripe)' },
  { id: 'mercadopago', label: '💚 Mercado Pago' },
  { id: 'cash',        label: '💵 Cash' },
];

const PaymentScreen = () => {
  const [selected, setSelected] = useState('stripe');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      {paymentMethods.map(method => (
        <TouchableOpacity
          key={method.id}
          style={[styles.option, selected === method.id && styles.selected]}
          onPress={() => setSelected(method.id)}
        >
          <Text style={styles.optionText}>{method.label}</Text>
          {selected === method.id && <Text style={styles.check}>✓</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 20, backgroundColor: '#fff' },
  title:      { fontSize: 22, fontWeight: '600', marginBottom: 24 },
  option:     { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 10, marginBottom: 12 },
  selected:   { borderColor: '#000', backgroundColor: '#f5f5f5' },
  optionText: { fontSize: 15 },
  check:      { fontWeight: '700' },
});

export default PaymentScreen;