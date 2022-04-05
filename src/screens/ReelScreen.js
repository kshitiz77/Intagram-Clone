import { View, Text } from 'react-native'
import React from 'react'

const ReelScreen = ({navigation, route}) => {

  return (
    <View style={{backgroundColor:'#000', flex:1, justifyContent:'center'}}>
      <Text style={{color:'#fff'}}>{route.params?.email}</Text>
      <Text style={{color:'#fff'}}>{route.params?.name}</Text>
    </View>
  )
}

export default ReelScreen