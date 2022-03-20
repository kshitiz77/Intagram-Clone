import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const Header = () => {
  return (
    <View style={styles.profileScreenHeaderContainer}>
      <View style={styles.profileScreenHeaderLeftSideContainer}>
          <Text style={styles.profileScreenHeaderUserName}>_Iron_Man___</Text>
      </View>
      <View style={styles.profileScreenHeaderRightSideContainer}>
      <TouchableOpacity>
        <Image style={styles.profileScreenHeaderAddPostIcon} source={require('../../assets/add-icon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.profileScreenHeaderMenuIcon} source={require('../../assets/menu.png')}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header