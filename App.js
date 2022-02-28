import { useState } from 'react';
import { StyleSheet, View, Text ,FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addTodo'

export default function App() {

  const [todos, setTodo] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'creat an app', key: 2 },
    { text: 'play on the swtich', key: 3 },
    { text: 'create tasks', key: 4 }
  ])

  const pressHandler = (key) => {
      setTodo((prevTodos) => {
          return prevTodos.filter(x => x.key != key);
      })
  }

  const addTodo = (text) => {
    if(text.length > 3){
      setTodo ((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }
    else{
        Alert.alert('OOPSSS...', 'Todo must be over 3 characters long',[
          {text: 'Understood', onPress: () => console.log('alert closed')}
        ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>
              <AddTodo submitTodo={addTodo}/>
              <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                    <TodoItem pressHandler={pressHandler} item={item} />
                  )} 
                />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding:20
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
