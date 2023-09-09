import {View, Text, Pressable , StyleSheet} from 'react-native'; 

function InfoButton ({children, pressHandler}){
  
    return ( 
     
     <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed}) => 
        pressed 
        ? [styles.buttonInnerContainer, styles.pressed]
        : styles.buttonInnerContainer} 
        onPress={pressHandler} 
        android_ripple={{color:'#640233'}}
        >
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
     </View>
     
    );
}

export default InfoButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20, 
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#ff93ac',
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});