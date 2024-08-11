import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Added flexGrow to ScrollView
    backgroundColor: '#fff',
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
  },
  btn: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'chartreuse',
    margin: 10,
  },
  title: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
  },
  content: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    fontSize: 20,
  },
  contain: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 20,
  },
  but: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'red',
    margin: 10,
  },
});

export default styles;
