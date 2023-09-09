import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

 function TiktokShop({navigation}) {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/TiktokShop.jpg')} // Provide the correct path to your background image
        style={styles.backgroundImage}
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('SnakeandLadder')}
      >
        <Image 
          source={require('../assets/images/crown1.png')} // Provide the correct path to your button image
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
export default TiktokShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%', // Make the background image cover the entire container
    height: '100%', // Make the background image cover the entire container
    position: 'absolute', // Position the background image behind other elements
  },
  buttonContainer: {
    position: 'absolute',
    top: 20, // Adjust the top value to position the button vertically
    right: 20, // Adjust the right value to position the button horizontally
  },
  buttonImage: {
    width: 60, // Adjust the width of the button image
    height: 60, // Adjust the height of the button image
    backgroundColor: '#000000',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 10, 
    paddingHorizontal: 12, 
    
    
  },
});