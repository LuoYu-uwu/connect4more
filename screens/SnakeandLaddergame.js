
import { View, StyleSheet, Image , Text, TouchableOpacity} from 'react-native';


const colorfulRectangles = [
    { id: '1', color: '#146779', number: '6001-6200' },
    { id: '2', color: '#32FFF9', number: '6201-6400' },
    { id: '3', color: '#FF93AC', number: '6401-6600' },
    { id: '4', color: '#EF0051', number: '6601-6800' },
    { id: '5', color: '#000000', number: '6801-7000' },
];

const colorfulRectangles1 = [
  { id: '1', color: '#32FFF9', number: '7801-8000'  },
  { id: '2', color: '#EF0051', number: '7601-7800'  },
  { id: '3', color: '#000000', number: '7401-7600'  },
  { id: '4', color: '#146779', number: '7201-7400'  },
  { id: '5', color: '#FF93AC', number: '7001-7200'  },
];
const colorfulRectangles2 = [
    { id: '1', color: '#146779', number: '8001-8200' },
    { id: '2', color: '#32FFF9', number: '8201-8400' },
    { id: '3', color: '#FF93AC', number: '8401-8600' },
    { id: '4', color: '#EF0051', number: '8601-8800' },
    { id: '5', color: '#000000', number: '8801-9000' },
];
const colorfulRectangles3 = [
    { id: '1', color: '#32FFF9', number: '9801-10000'  },
    { id: '2', color: '#EF0051', number: '9601-9800'  },
    { id: '3', color: '#000000', number: '9401-9600'  },
    { id: '4', color: '#146779', number: '9201-9400'  },
    { id: '5', color: '#FF93AC', number: '9001-9200'  },
  ];



function Game() {
  return (
    <View style={styles.container}>    
        <Image
          source={require('../assets/images/tiktok.png')}
          style={{
            ...styles.tiktok,
            top: 10,
            left: 230,
          }}
        />
      <View style={styles.arrowdown}>
        <Text style={styles.start}>START</Text>
        <Image source={require('../assets/images/arrowdown.png')} style={styles.arrowImageStart} />
      </View>

        <View style={styles.rectangleContainer}>
          {colorfulRectangles.map((item) => (
            <View key={item.id} style={[styles.rectangle1, { backgroundColor: item.color }]}>
              <Text style={styles.rectangleText}>{item.number}</Text>
            </View>
          ))}
        </View>
      <View>
        <View style={styles.rectangleContainer}>
          {colorfulRectangles1.map((item) => (
            <View key={item.id} style={[styles.rectangle, { backgroundColor: item.color }]}>
            <Text style={styles.rectangleText}>{item.number}</Text>
            </View>
          ))}
        </View>
        <View style={styles.rectangleContainer}>
          {colorfulRectangles2.map((item) => (
            <View key={item.id} style={[styles.rectangle, { backgroundColor: item.color }]}>
            <Text style={styles.rectangleText}>{item.number}</Text>
            </View>
          ))}
        </View>
        <View style={styles.rectangleContainer}>
          {colorfulRectangles3.map((item) => (
            <View key={item.id} style={[styles.rectangle, { backgroundColor: item.color }]}>
            <Text style={styles.rectangleText}>{item.number}</Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
      </View>

      <Image
        source={require('../assets/images/ladder.png')}
        style={{
          ...styles.ladderR,
          top: 115,
          left: 105,
        }}
      />

      <Image
        source={require('../assets/images/snake.png')}
        style={{
          ...styles.snake,
          top: 120,
          left: 300,
        }}
      />
      <Image
        source={require('../assets/images/snake.png')}
        style={{
          ...styles.snake,
          top: 175,
          left: 150,
        }}
      />
      <Image
        source={require('../assets/images/ladder.png')}
        style={{
          ...styles.ladderR,
          top: 240,
          left: 250,
        }}
      />
      <View style={styles.arrowdown}>
        <Image source={require('../assets/images/arrowdown.png')} style={styles.arrowImageEnd} />
      </View>
      <Text style={styles.end}>PLATINUM TIER</Text>
    </View>
  );
}

  

const styles = StyleSheet.create({
  rectangleContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  rectangle1: {
    flex: 1,
    width: 100,
    height: 50,
    borderRadius: 8,
    
  },
  rectangle: {
    flex: 1,
    width: 100,
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    
  },
  rectangleText: {
    color: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: 'black',
    fontWeight: '700',
  },
  arrowdown: {
    width: 200,
    height: 80,
    marginHorizontal: 27,

  },
  arrowImageStart: {
    marginHorizontal: 21,
    marginTop: 5,
    width: 12,
    height: 10,
    flex: 1,
  },
  arrowImageEnd: {
    marginHorizontal: 21,
    marginTop: 5,
    width: 12,
    height: 12,
    flex: 1,
  },
  ladderR:{
    position: 'absolute',
    width: 50,
    height: 50,
    zIndex: 5,
  },
  tiktok:{
    position: 'absolute',
    width: 80,
    height: 80,
    zIndex: 5,
  },
  start:{
    fontSize: 24,
    fontWeight: '800',
    color: '#F7EF8A'
  },
  end:{
    marginRight: 230,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '900',
    color: '#E5E4E2',
    backgroundColor: '#146779',
    opacity: 0.5,
    borderRadius: 10,
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    marginBottom: 10,
  },
  snake:{
    position: 'absolute',
    width: 50,
    height: 120,
    zIndex: 5,
  },
 

});

export default Game;
