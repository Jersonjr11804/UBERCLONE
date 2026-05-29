import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // TODO: Implement real geolocation
    // For now, using a default location to allow app to build
    // Install a location library like:
    // - react-native-location
    // - @react-native-firebase/functions (with cloud functions)
    // - or use Expo's expo-location if using Expo
    
    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
      }
      // Default location (Medellín)
      setLocation({ lat: 6.2442, lng: -75.5812 });
    };
    requestPermission();
  }, []);

  return location;
};

export default useLocation;