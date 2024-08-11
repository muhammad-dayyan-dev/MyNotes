import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function Main() {
  const notesData = useSelector(state => state.getNotes.notes);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const filteredNotes = notesData.filter(item => {
    return (
      item.title && item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const navigateToNotes = note => {
    setSelectedNote(note);
    navigation.navigate('Notes', {noteData: note});
  };

  const color = index => {
    const colors = ['aqua', 'lawngreen', 'lightslategrey', 'hotpink', 'orange'];
    const colorIndex = index % colors.length;
    const backgroundColor = colors[colorIndex];
    return {backgroundColor};
  };

  console.log(notesData);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View>
        <Text style={styles.head}>Notepad</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Search..."
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredNotes}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigateToNotes(item)}
            style={{
              ...color(index),
              elevation: 10,
              borderRadius: 20,
              padding: 15,
              margin: 15,
            }}>
            <Text style={[styles.title, {marginTop: 5}]}>{item.title}</Text>
            <Text style={[styles.content, {marginTop: 5}]}>{item.note}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.add}
        onPress={() => navigateToNotes(null)}
        activeOpacity={0.7}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
