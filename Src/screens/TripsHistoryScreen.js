import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const TripsHistoryScreen = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('trips')
      .orderBy('date', 'desc')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTrips(data);
      });
    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip history</Text>
      <FlatList
        data={trips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.route}>{item.origin} → {item.destination}</Text>
            <Text style={styles.detail}>{item.date}</Text>
            <Text style={styles.cost}>${item.cost?.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No trips yet</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title:     { fontSize: 22, fontWeight: '600', marginBottom: 16 },
  card:      { padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#eee', marginBottom: 12 },
  route:     { fontSize: 15, fontWeight: '500' },
  detail:    { color: '#888', fontSize: 12, marginTop: 4 },
  cost:      { fontSize: 16, fontWeight: '700', marginTop: 8 },
  empty:     { color: '#aaa', textAlign: 'center', marginTop: 40 },
});

export default TripsHistoryScreen;