import { useState } from 'react';
import {View, Button, TextInput, StyleSheet, Modal, Image} from 'react-native';

function TodoInput (props){
const [enterText, setEnterText] = useState('');

function toDoInputHandler(enterText){
    setEnterText(enterText);
    }

    function addToDoHandler() {
        props.onAddTodo(enterText);
        setEnterText('');
    }
    return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../images/logo.png')} />
    <TextInput onChangeText={toDoInputHandler} style={styles.textInputContainer} placeholder='Enter Your Todo!...' value={enterText} />
    <View style={styles.buttonCOntainer}>
    <View style={styles.button}>
             <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
            </View>
    <View style={styles.button}>
    <Button title='Add ToDo' onPress={addToDoHandler} color="5c0acc"/>
    </View>
    
        </View> 
   </View>
   </Modal>
   );
}

export default TodoInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
       textInputContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 16,
        borderColor: '#c4d0ff',
        backgroundColor: '#c4d0ff',
        color: '#120438',
        borderRadius: 8,
       },
       buttonCOntainer: {
        marginTop: 16,
        flexDirection: 'row',
       },
       button:{
        width: 100,
        marginHorizontal: 8,
        padding: 16
       },
       image: {
        width: 100,
        height: 100,
        margin: 20,
       }
});
