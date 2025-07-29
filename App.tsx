import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Hello from './hello';
import Login from './login';
import SignUp from './signup';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
  
      <SignUp />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;