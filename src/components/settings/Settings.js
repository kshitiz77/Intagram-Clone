import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const Settings = ({navigation}) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.settingsScreenContainer}>
      <View style={styles.settingScreenLoginsContainer}>
        <Text style={styles.settingScreenLoginsText}>Logins</Text>
        <TouchableOpacity>
          <Text style={styles.settingScreenLoginsLinkText}>Add or switch accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text style={styles.settingScreenLoginsLinkText}>Log out _iron_man__</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  settingScreenLoginsContainer: {
    marginHorizontal: 20
  },
  settingScreenLoginsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom:15
  },
  settingScreenLoginsLinkText:{
    color:'#0095F6',
    fontSize:18,
    marginVertical:15
  }
})

export default Settings