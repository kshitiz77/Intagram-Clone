import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export const BottomTabIcons = [
  {
    name: 'Home',
    activeIcon: require('../../assets/Active-Home-Icon.png'),
    inactiveIcon: require('../../assets/Inactive-Home-Icon.png'),
  },
  {
    name: 'Search',
    activeIcon: require('../../assets/Active-Search-Icon.png'),
    inactiveIcon: require('../../assets/Inactive-Search-Icon.png'),
  },
  {
    name: 'Reel',
    activeIcon: require('../../assets/Active-Reel-Icon.png'),
    inactiveIcon: require('../../assets/Inactive-Reel-Icon.png'),
  },
  {
    name: 'Like',
    activeIcon: require('../../assets/Active-Like-Icon.png'),
    inactiveIcon: require('../../assets/Love-Icon.png'),
  },
  {
    name: 'Profile',
    activeIcon: require('../../assets/Iron-Man.jpg'),
    inactiveIcon: require('../../assets/Iron-Man.jpg'),
  }
]

const BottomTab = ({ icons }) => {
  const [activeTabIcon, setActiveTabIcon] = useState('Home')

  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTabIcon(icon.name)}>
        <Image source={activeTabIcon === icon.name ? icon.activeIcon : icon.inactiveIcon} 
        style={[styles.icon, icon.name === 'Profile' ? styles.profilePic : null,
        activeTabIcon === 'Profile' && icon.name === activeTabIcon ? styles.profilePic(activeTabIcon) : null
        ]} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  icon: {
    width: 25,
    height: 25
  },
  profilePic:(activeTabIcon) =>({
    borderWidth: activeTabIcon === 'Profile' ? 2 : 0,
    borderRadius:50,
    borderColor:'#fff'
}),
})

export default BottomTab