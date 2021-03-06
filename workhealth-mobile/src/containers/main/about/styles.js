import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabletContainer: {
    justifyContent: 'center',
    marginTop: -70,
  },
  version: {
    fontSize: 18,
    position: 'absolute',
    bottom: 30,
    color: '$greyishGrey',
  },
  linkMargin: {
    marginVertical: 50
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 50,
  },
});
