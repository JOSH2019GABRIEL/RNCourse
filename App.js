import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

import TodoItems from './assets/components/TodoItems';
import TodoInput from './assets/components/TodoInput';

export default function App() {
const [modalIsVisible, setModalIsVisible] = useState(false);
const [todoAll, setTodoAll] =useState([]);

function startAddTodoHandler() {
  setModalIsVisible(true);
}

function endAddTodoHandler() {
  setModalIsVisible(false);

}



function addToDoHandler(enterText) {
  setTodoAll((currentTodoAll)=> [...currentTodoAll, {text: enterText, id: Math.random().toString()},
  ]);
  endAddTodoHandler();

}


function deleteGoalHandler(id) {
 setTodoAll(currentTodoAll =>{
  return currentTodoAll.filter((todo)=> todo.id !=id);
 });
}
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
    <Button title='Add New Todo' color={"#5e0acc"} onPress={startAddTodoHandler}/>
    <TodoInput visible={modalIsVisible} onAddTodo={addToDoHandler} onCancel={endAddTodoHandler} />
     <View style={styles.goalContainer}>
     <FlatList data={todoAll}
     renderItem={(itemData) => {
      return <TodoItems text={itemData.item.text} 
      id={itemData.item.id}
      onDeleteItem={deleteGoalHandler}/>
     }}
     keyExtractor= {(item, index) => {
      return item.id;
     }}
     alwaysBounceVertical={false}
     />
     </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 40,
    paddingHorizontal: 12,
    backgroundColor: '#1e085a',
  },
   goalContainer:{
    flex: 5,
    padding: 6,
    alignContent: 'center',
   },
   
});
