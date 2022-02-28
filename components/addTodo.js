import { useState } from 'react';
import { StyleSheet, View, Text , TextInput, Button} from 'react-native';

export const AddTodo = ({ submitTodo }) => {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput 
                style ={styles.input}
                placeholder='new todo....'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitTodo(text)} title='Add Todo' color='coral'/>
        </View>
    )
}


const styles = StyleSheet.create({
  input:{
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1
  }
});

export default AddTodo