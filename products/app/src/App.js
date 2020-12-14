import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from 'screens';
import reduxStore from './redux/store';
import { ThemeProvider } from 'mova-rn-helpers/theme';
const { store, persistor } = reduxStore();

const theme = {
  palette: {
    primary: {
      main: 'rgb(30, 84, 118)',
      contrast: '#ffffff',
    },
    secondary: {
      main: 'rgb(10, 60, 112)',
      contrast: '#ffffff',
    },
    light: {
      main: '#FFFFFF',
      contrast: '#333333',
    },
    success: {
      main: '#8DC055',
      contrast: '#005172',
    },
  },
  borders: {
    primary: {
      borderWidth: 0.5,
      borderColor: 'rgba(160, 160, 160, 0.6)',
    },
    secondary: {
      borderWidth: 0.25,
      borderColor: 'rgba(160, 160, 160, 0.6)',
    },
  },
  typography: {
    title: {
      fontWeight: '700',
      fontSize: 26,
      color: 'rgb(0,0,0)',
    },
    subtitle: {
      fontWeight: '700',
      fontSize: 17,
      color: '#333333',
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: '700',
      color: '#555555',
    },
    text: {
      color: '#333333',
    },
    textSecondary: {
      color: '#aaaaaa',
    },
  },
  inputs: {
    primary: {
      label: {
        fontSize: 17,
        fontWeight: '700',
        color: '#ffffff',
      },
      input: {
        fontSize: 17,
        fontWeight: '400',
        color: '#ffffff',
        height: 35,
      },
      placeholder: {
        color: '#ffffffAA',
      },
      wrapper: {
        borderColor: '#ffffff',
      },
    },
  },
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
