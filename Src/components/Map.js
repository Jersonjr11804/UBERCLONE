import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';
import useLocation from '../hooks/useLocation';

const Map = () => {
  const location = useLocation();
  const origin = useSelector(state => state.nav.origin);
  const destination = useSelector(state => state.nav.destination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (origin && destination) {
      mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }
  }, [origin, destination]);

  if (!location) return null;

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker identifier="origin" coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }} title="Origin" />
      )}
      {destination?.location && (
        <Marker identifier="destination" coordinate={{ latitude: destination.location.lat, longitude: destination.location.lng }} title="Destination" pinColor="blue" />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1, height: 300 },
});

export default Map;