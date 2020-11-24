import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width * (49.9 / 100),
    height: Dimensions.get('screen').height * (29.3 / 100),
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Black',
    fontSize: 16,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '10%',
  },
});

export default styles;
