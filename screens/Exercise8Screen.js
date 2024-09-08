import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, useWindowDimensions } from 'react-native';

export default function StatusBarScreen() {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState(width > height ? 'landscape' : 'portrait');
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for demonstration

  useEffect(() => {
    const newOrientation = width > height ? 'landscape' : 'portrait';
    if (newOrientation !== orientation) {
      setOrientation(newOrientation);
    }
  }, [width, height, orientation]);

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
