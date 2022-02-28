import { useState } from 'react';
import { StyleSheet, View, Text ,FlatList} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'

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

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            {/* form */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:20
  },
  list: {
    marginTop: 20
  }
});
