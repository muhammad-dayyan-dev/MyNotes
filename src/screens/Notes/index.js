import React, {useState, useEffect} from 'react';
import styles from './style';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import moment from 'moment/moment';
import {useDispatch, useSelector} from 'react-redux';
import {setNote, updateNote, deleteNote} from '../../redux/noteSlice';
import {useNavigation} from '@react-navigation/native';

const Notes = ({route}) => {
  const [word, setWord] = useState('');
  const [note, setnote] = useState('');
  const [isNoteAdded, setIsNoteAdded] = useState(false);
  const dispatch = useDispatch();
  const noted = useSelector(state => state.getNotes.notes);
  const navigation = useNavigation();
  const {noteData} = route.params;

  const deleteContainer = () => {
    if (noteData) {
      dispatch(deleteNote(noteData.id));
    }
    navigation.navigate('Main');
  };

  const appear = () => {
    if (!isNoteAdded) {
      if (noteData) {
        // If noteData exists, then update the note
        dispatch(updateNote({id: noteData.id, data: {title: word, note}}));
      } else {
        // If noteData is null, then create a new note
        const maxId = Math.max(...noted.map(note => note.id), -1);
        const newId = maxId + 1;
        dispatch(setNote({title: word, note, id: newId}));
      }
      setIsNoteAdded(true);
    }
    navigation.navigate('Main');
  };

  useEffect(() => {
    if (noteData) {
      setWord(noteData.title);
      setnote(noteData.note);
    }
  }, [noteData]);

  const show = () => {
    return word !== '' && note !== '';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.time}>{moment().format('LLL')}</Text>
        {show() && (
          <TouchableOpacity onPress={appear}>
            <Text style={styles.btn}>✔</Text>
          </TouchableOpacity>
        )}
        {noteData && ( 
          <TouchableOpacity onPress={deleteContainer}>
            <Text style={styles.but}>✖</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        placeholder="Title"
        style={styles.title}
        value={word}
        multiline={true}
        onChangeText={text => setWord(text)}
      />
      <TextInput
        placeholder="Note something down..."
        style={styles.content}
        value={note}
        multiline={true}
        onChangeText={text => setnote(text)}
      />
    </ScrollView>
  );
};

export default Notes;
