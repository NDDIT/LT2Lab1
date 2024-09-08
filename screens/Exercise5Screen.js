import React, { useState, useEffect } from 'react';
import { View, Image, Button, Dimensions, StyleSheet, Text } from 'react-native';

export default function Exercise5Screen() {
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
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-ch_kWzikJnSJgRebt4Xs_8gnrRjgrojqiL0UEWETS8mN1mzFp1by3-75HnIpqD-mTA&usqp=CAU' }} // Replace with your image URL
        style={[styles.image, orientation === 'landscape' ? styles.landscapeImage : styles.portraitImage]}
      />
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
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  portrait: {
    flexDirection: 'column',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
  landscapeImage: {
    height: 150, // Reduced height for landscape mode
  },
  portraitImage: {
    height: 300, // Default height for portrait mode
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
