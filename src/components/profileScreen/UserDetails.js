import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'

const UserDetails = ({handleShowDiscoverPeople}) => {
    return (
        <View style={styles.userDetailsContainer}>
            <View style={styles.userDetailsTopContainer}>
                <TouchableOpacity>
                    <View style={styles.userDetailsLeftSideContainer}>
                        <Image style={styles.userDetailsUserImage} source={require('../../assets/images/Iron-Man.jpg')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.userDetailsRightSideContainer}>
                    <TouchableOpacity>
                        <View style={styles.userDetailsCountContainer}>
                            <Text style={styles.userDetailsCountNum}>2</Text>
                            <Text style={styles.userDetailsCountText}>Posts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.userDetailsCountContainer}>
                            <Text style={styles.userDetailsCountNum}>36</Text>
                            <Text style={styles.userDetailsCountText}>Followers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.userDetailsCountContainer}>
                            <Text style={styles.userDetailsCountNum}>14</Text>
                            <Text style={styles.userDetailsCountText}>Following</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.userDetailsBioContainer}>
                <Text style={styles.userDetailsUserName}>Iron Man</Text>
                <Text style={styles.userDetailsBioText}>Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries.{'\n'}#superhero #ironman #avengers</Text>
            </View>
            <View style={styles.userDetailsBottomContainer}>
            <TouchableOpacity style={styles.userDetailsEditProfileTextContainer}>
                    <Text style={styles.userDetailsEditProfileText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userDetailsAddFriendIconContainer} onPress={handleShowDiscoverPeople}>
                    <Image style={styles.userDetailsAddFriendIcon} source={require('../../assets/images/add-user.png')} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserDetails