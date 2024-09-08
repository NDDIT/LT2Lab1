import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Platform } from 'react-native';

export default function PlatformSpecificScreen() {
  const { width } = Dimensions.get('window');
  const buttonWidth = width / 2 - 20; // Adjust button width for demonstration

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Platform-Specific Styles</Text>
      <Button title="Button 1" onPress={() => {}} color={styles.buttonColor} />
      <Button title="Button 2" onPress={() => {}} color={styles.buttonColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: Platform.select({
      ios: 20, // Padding for iOS
      android: 10, // Padding for Android
    }),
  },
  headerText: {
    fontSize: Platform.select({
      ios: 24, // Font size for iOS
      android: 20, // Font size for Android
    }),
    fontWeight: 'bold',
    marginBottom: Platform.select({
      ios: 20, // Margin for iOS
      android: 10, // Margin for Android
    }),
    color: '#333',
  },
  buttonColor: Platform.select({
    ios: '#007AFF', // Button color for iOS
    android: '#DF3079', // Button color for Android
  }),
});
