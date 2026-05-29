/* eslint-env jest */
import 'react-native-gesture-handler/jestSetup';
import { NativeModules } from 'react-native';

NativeModules.RNGestureHandlerModule = NativeModules.RNGestureHandlerModule || {};

jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
}));

jest.mock('react-native-maps', () => {
    const React = require('react');
    const { View } = require('react-native');

    const MockMapView = (props) => React.createElement(View, props, props.children);
    const MockMarker = (props) => React.createElement(View, props, props.children);

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    PROVIDER_GOOGLE: 'google',
  };
});

jest.mock('@react-native-firebase/app', () => ({
  __esModule: true,
  default: {
    app: jest.fn(),
    apps: [],
  },
}));

jest.mock('@react-native-firebase/auth', () => ({
  __esModule: true,
  default: {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
  },
}));

jest.mock('@react-native-firebase/firestore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({ docs: [] })),
      add: jest.fn(() => Promise.resolve({ id: 'mock' })),
    })),
  })),
}));
