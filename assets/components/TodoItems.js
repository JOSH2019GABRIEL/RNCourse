import {StyleSheet,View,Text,Pressable} from 'react-native'

function TodoItems(props) {
return (
    <Pressable android_ripple={{color: 'grey'}} onPress={props.onDeleteItem.bind(this,props.id)}>
    <View style={styles.todoItems}>
    <Text style={styles.toDoTextItems}>{props.text}</Text>
   </View>
   </Pressable>
);
}

export default TodoItems;

const styles = StyleSheet.create({
    todoItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
       },
       toDoTextItems: {
        color: 'white',
        padding: 8,
        fontSize: 24,
        fontWeight: 'bold'
       },
});