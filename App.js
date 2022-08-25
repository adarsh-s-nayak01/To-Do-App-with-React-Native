import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
export default function App() {
    // const [people,setPeople]=useState([
    //   {name:'adarsh',id:'1'},
    //   {name:'aditya',id:'2'},
    //   {name:'akshay',id:'3'},
    //   {name:'abhinav',id:'4'},
    //   {name:'archit',id:'5'},
    // ]);
    
    // const pressHandler=(id)=>{
    //   console.log(id);
    //   setPeople((prevPeople)=>{
    //     return prevPeople.filter(person => person.id != id)
    //   })
    // }

    const [todos,setTodos]=useState([
      {text:'buy coffee',key:'1'},
      {text: 'create an app',key:'2'},
      {text: 'play on the switch',key:'3'},
    ])

    //write a function to delete an act from the array.
    const pressHandler=(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo => todo.key!=key)
        })
    }

    //for submitting the newer todos
    const submitHandler=(text)=>{
      setTodos((prevTodos)=>{
        return [
          {text:text, key: Math.random().toString() },
          ...prevTodos,
        ];
      })
    }

  return (

    // to do list app.
    <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content} >
            {/* to form */}
            <AddTodo submitHandler={submitHandler}  />
              <View style={styles.list}>
                  <FlatList 
                      data={todos}
                      renderItem={({item})=>(
                         <TodoItem item={item} pressHandler={pressHandler} />
                      )}
                  />
                  
              </View>
            
        </View>
    
    
    
    </View>
  
  
  );




      {/* //for larger list the flatlist is more useful. */}
      {/* <FlatList 
          numColumns={2}
          keyExtractor={(item)=>item.id}
          data={people}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>pressHandler(item.id)} >
              <Text style={styles.item}>{item.name} </Text>
            </TouchableOpacity>
          )}

        /> */}


    {/* <ScrollView>
        {people.map(item=>{
            <View key={item.key} >
                <Text  style={styles.item} >{item.name} </Text>
            </View>
        })}
    </ScrollView> */}
       
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:40,
    // paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent:"center",
  },
  content:{
    padding:40,

  },
  list:{
    marginTop:20,
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize: 24,
    marginHorizontal:10,
    marginTop:24,

  },
  buttonContainer:{
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
});
