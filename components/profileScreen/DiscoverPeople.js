import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import { USERS } from '../../data/users'

const DiscoverPeople = () => {
  return (
    <View style={styles.discoverPeopleContainer}>
      <View style={styles.discoverPeopleHeader}>
        <TouchableOpacity>
          <Text style={styles.discoverPeopleText}>Discover People</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.discoverPeopleSeeAllPeopleText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={USERS}
        horizontal={true}
        renderItem={(element) => {
          return (
            <View style={styles.discoverPeopleBodyContainer}>
              <View style={styles.discoverPeopleUserImageContainer}>
                <Image source={element.item.img} style={styles.discoverPeopleUsersImage} />
                <Image source={require('../../assets/cancel.png')} style={styles.discoverPeopleCloseIcon}/>
              </View>
              <TouchableOpacity style={styles.discoverPeopleNameContainer}>
              <Text style={styles.discoverPeopleName}>{element.item.userName}</Text>
              <Text style={styles.discoverPeopleFollowDetails}>{element.item.user}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.discoverPeopleFollowBtn}>
                <Text style={{color:'#fff'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          )
        }}></FlatList>
    </View>
  )
}

export default DiscoverPeople