import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const win = Dimensions.get('window');
const ratio = win.width / 440;

const Posts = ({ posts }) => {
    return (
        <View style={styles.postContainer}>
            <PostHeader posts={posts} />
            <PostImage posts={posts} />
            <PostIcon />
            <PostFooter posts={posts} />
            <PostComments posts={posts} />
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
            <Image source={posts.postImg} style={styles.postImage} resizeMode="cover" />
        </View>
    )
}

const PostIcon = () => {
    return (
        <View style={styles.postIconContainer}>
            <View style={styles.postIconLeftSide}>
                <TouchableOpacity>
                    <Image source={require('../../assets/Love-Icon.png')} style={styles.postIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Comment-Icon.png')} style={styles.postIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Message-Icon.png')} style={styles.postIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Save-Icon.png')} style={styles.postIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}



const PostFooter = ({ posts }) => {
    return (
        <View style={styles.postFooterContainer}>
            <View>
                <Text style={styles.postLikesNum}>{posts.likes} likes</Text>
            </View>
            <View style={styles.userCaption}>
                <Text>
                    <Text style={styles.userName}>{posts.user} </Text>
                    <Text style={styles.userCaptionText}>{posts.caption}</Text>
                </Text>
            </View>
            
        </View>
    )
}

const PostComments = ({posts}) =>{
    return(
        <>
        <TouchableOpacity>
                <View style={styles.commentsTextContainer}>
                    <Text style={styles.commentsText}>View all {posts.commentCount} comments</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.postTimeContainer}>
                <Text style={styles.postTime}>{posts.postTime} ago</Text>
            </View>
        </>
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
        resizeMode:'contain'

    },
    postIconContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 10
    },
    postIconLeftSide: {
        flexDirection: 'row'
    },
    postIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    postFooterContainer: {
        marginHorizontal: 15,
    },
    postLikesNum: {
        color: '#fff',
        fontWeight: '900',
    },
    userCaption: {
        flexDirection: 'row',
        marginVertical: 5
    },
    userName: {
        color: '#fff',
        fontWeight: '700',
    },
    userCaptionText: {
        color: '#fff',
    },
    commentsTextContainer:{
        marginHorizontal:14
    },
    commentsText: {
        color: '#858585',
        fontWeight: '400',
        fontSize: 16,
        marginVertical: 2,
    },
    postTime: {
        color: '#858585',
        fontSize: 12,
        marginVertical:2,
        marginHorizontal:14
    },
    
})

export default Posts