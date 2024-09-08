import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  const buttonColors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2', '#FF1493', '#00FA9A', '#FF4500'];

  return (
    
    <View style={styles.container}>
      <View>
      <Text > Nguyen Duy Duong</Text>
      <Text>MSSV: 2124801030182</Text>
    </View>
      {Array.from({ length: 8 }, (_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: buttonColors[index] }]}
          onPress={() => navigation.navigate(`Exercise${index + 1}`)}
        >
          <Text style={styles.buttonText}>Exercise {index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF', // Light background color
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
