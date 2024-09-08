import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions, StyleSheet, Text } from 'react-native';

export default function Exercise3Screen() {
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
  );

  useEffect(() => {
    const handleChange = ({ window }) => {
      const newOrientation = window.width > window.height ? 'landscape' : 'portrait';
      if (newOrientation !== orientation) {
        setOrientation(newOrientation);
        console.log(`Orientation changed to: ${newOrientation}`); // Debugging log
      }
    };

    const subscription = Dimensions.addEventListener('change', handleChange);

    return () => {
      subscription?.remove();
    };
  }, [orientation]);

  return (
    <View style={[styles.container, orientation === 'landscape' ? styles.landscape : styles.portrait]}>
      <Text style={styles.orientationText}>Current orientation: {orientation}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} color="#DF3079" />
        <Button title="Button 2" onPress={() => {}} color="#DF3079" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Light background color for contrast
  },
  landscape: {
    flexDirection: 'row',
  },
  portrait: {
    flexDirection: 'column',
  },
  buttonContainer: {
    width: '80%', // Adjust as needed for better spacing
    justifyContent: 'space-between',
  },
  orientationText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333333',
  },
});
