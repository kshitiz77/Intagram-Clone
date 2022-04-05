import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SearchScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleUserDetails = () =>{
    navigation.navigate({
      name: 'Reel',
      params: { email : email, name : name },
    });
  }
  return (
    <View style={{backgroundColor:'#000', flex:1, justifyContent:'center', alignItems:'center'}}>
      <TextInput  style={{borderColor:'#ccc', 
      backgroundColor:'#fff', 
      width:200, 
      borderRadius:10, 
      paddingHorizontal:20}}
      value={name}
      placeholder="Enter Your Name"
      onChangeText={(name) => setName(name)}
      />
      <TextInput  style={{borderColor:'#ccc', 
      backgroundColor:'#fff', 
      width:200, 
      borderRadius:10, 
      paddingHorizontal:20,
      marginVertical:10}}
      value={email}
      onChangeText={(email) => setEmail(email)}
      placeholder="Enter Your Email"
      />
      <TouchableOpacity style={{borderColor:'#ccc', 
      backgroundColor:'#fff', 
      width:200, 
      borderRadius:10, 
      padding:10,
      justifyContent:'center',
      alignItems:'center'}}
      onPress={handleUserDetails}>
        <Text style={{color:'#000', fontSize:16}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchScreen