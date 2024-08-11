import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34c759',
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 3,
    fontSize: 25,
    margin: 10,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    marginLeft: 10,
    color: 'white',
  },
  content: {
    marginHorizontal: 10,
    fontSize: 25,
    color: '#fff',
    height: 35,
  },
  add: {
    borderRadius: 50,
    backgroundColor: 'chartreuse',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 20,
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
