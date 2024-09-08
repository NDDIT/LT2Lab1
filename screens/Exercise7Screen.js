import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Dimensions, StyleSheet, Platform } from 'react-native';

export default function StatusBarScreen() {
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
  );
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for demonstration

  useEffect(() => {
    const handleChange = ({ window }) => {
      const newOrientation = window.width > window.height ? 'landscape' : 'portrait';
      if (newOrientation !== orientation) {
        setOrientation(newOrientation);
      }
    };

    const subscription = Dimensions.addEventListener('change', handleChange);

    return () => {
      subscription?.remove();
    };
  }, [orientation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Platform.select({
          ios: 'transparent', // iOS has no backgroundColor for StatusBar
          android: isDarkMode ? '#333333' : '#F0F8FF', // Dark or light background for Android
        })}
        translucent={Platform.OS === 'ios'} // iOS supports translucent status bar
      />
      <Text style={styles.headerText}>StatusBar Customization</Text>
      <Text style={styles.orientationText}>Current orientation: {orientation}</Text>
      <Text style={styles.themeText}>Current theme: {isDarkMode ? 'Dark' : 'Light'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Background color
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orientationText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  themeText: {
    fontSize: 16,
    color: '#333',
  },
});
