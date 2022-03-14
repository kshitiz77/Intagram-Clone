import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
const win = Dimensions.get('window');
const ratio = win.width / 440;

const Posts = ({ posts }) => {
    return (
        <View style={styles.postContainer}>
            <Divider width={1} orientation='vertical' />
            <PostHeader posts={posts} />
            <PostImage posts={posts} />
        </View>
    )
}

const PostHeader = ({ posts }) => (
    <View style={styles.postHeaderContainer}>
        <TouchableOpacity>
            <View style={styles.userProfile}>
                <Image source={posts.profileImg} style={styles.profileImg} />
                <Text style={styles.user}>{posts.user}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.moreFontText}>...</Text>
        </TouchableOpacity>
    </View>
)

const PostImage = ({ posts }) => {
    return (
        <View>
            <Image source={posts.postImg} style={styles.postImage}  resizeMode="cover"/>
        </View>
    )
}
const styles = StyleSheet.create({
    postContainer: {
        marginTop: 8,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 7,
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImg: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f5a142'
    },
    user: {
        marginLeft: 7,
        color: '#fff',
        fontWeight: '700',
    },
    moreFontText: {
        color: '#fff',
        fontSize: 30,
    },
    postImage: {
        // width: win.width,
        // height: 440 * ratio,
        // width:win?.width,
        // height:win?.width,
        width: win.width,
    height: win.width,
        // resizeMode:'contain'

    }
})

export default Posts