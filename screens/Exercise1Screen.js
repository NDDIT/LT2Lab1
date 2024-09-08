import React from 'react';
import { View, Button, Dimensions, StyleSheet } from 'react-native';

export default function Exercise1Screen() {
  const { width } = Dimensions.get('window');
  const buttonWidth = width / 2 - 20; // Subtract margin space

  return (
    <View style={styles.container}>
      <View style={[styles.button, { width: buttonWidth, backgroundColor: '#32CD32' }]}>
        <Button title="Button 1" onPress={() => {}} color="#8E44AD" />
      </View>
      <View style={[styles.button, { width: buttonWidth, backgroundColor: '#32CD32' }]}>
        <Button title="Button 2" onPress={() => {}} color="#8E44AD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Light background color
  },
  button: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the button corners are rounded
  },
});
