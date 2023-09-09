import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import InfoButton from '../Components/InfoButton';
import Game from './SnakeandLaddergame';
import Tiers from './InfoScreen';
import { LinearGradient } from 'expo-linear-gradient';


function SnakeandLadder({navigation}) {
   const goToScreen1 = () => {
      navigation.navigate('TiktokShop');
   };

   const [descrIsOpen, setDescrIsOpen] = useState(false);

   function openDescrHandler() {
     setDescrIsOpen(true);
   }
 
   function closeDescrHandler() {
     setDescrIsOpen(false);
   }
  return (
   <>
     <ScrollView style={styles.container} alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false}>
     <LinearGradient colors={['#32FFF9', '#FF93AC']} style={styles.rootScreen}>
      <View style={styles.info}>
              <Button title='?' onPress={openDescrHandler} color="black" />
              <Tiers visible={descrIsOpen} onClose={closeDescrHandler} />
           </View>
           <View style={styles.section}>
              <Text style={styles.rewardText}>REWARD</Text>
           </View>
           <View style={styles.section}>
              <Image
                 source={require('../assets/images/crown4.png')}
                 style={styles.crownImage} />
           </View>
           <View style={styles.section}>
              <View style={styles.buttonContainer}>
                 <Text style={styles.silverText}>GOLD</Text>
              </View>
           </View>
           <View style={styles.section}>
              <PrimaryButton navigation={navigation}>Get more EXP!!!</PrimaryButton>
           </View>
           <View style={styles.importgame}>
              <Game />
           </View>
       
        </LinearGradient>
        </ScrollView></>
        
  );
}

export default SnakeandLadder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 5,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardText: {
    fontSize: 30,
    fontWeight: '900',
    marginHorizontal: 24,
    color: 'white',
  },
  crownImage: {
    height: 150,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  silverText: {
    fontSize: 40,
    color: '#F7EF8A',
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: { width: 10, height: 10 },
    opacity: 0.75,
  },
  importgame: {
    marginTop: 30,
  },
  info: {
    marginLeft: 350,
    marginRight: 30,
    marginTop: 40,
  },
  backButton: {
    padding: 5,
    position: 'absolute',
    width: 20,
    height: 200,
    zIndex: 5,
    marginTop: 40,
    marginLeft: 10,
  },
  backArrow: {
    width: 40,
    height: 30,
    position: 'absolute',
  },
});
