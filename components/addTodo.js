import React,{useState} from 'react';
import {View,Text,TextInput,Button,Image} from 'react-native';

export default function AddTodo({submitHandler}){
    const [text,setText] = useState('');
    
    const changeHandler = (val)=>{
        setText(val);
    }

    return (
        <View>
            <TextInput
            style={StyleSheet.input}
                placeholder='new todo...'
                onChangeText={(val)=>{changeHandler(val)}}
             />
             <Button onPress={()=>submitHandler(text)} title='add todo'color='coral'  />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        
        marginBottom:10,
        paddingHorizontal:8,
        paddingHorizontal:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        
    }
})