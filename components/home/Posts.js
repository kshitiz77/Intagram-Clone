import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../../styles';

const Posts = ({ posts }) => {
    return (
        <View style={styles.homeScreenPostContainer}>
            <PostHeader posts={posts} />
            <PostImage posts={posts} />
            <PostIcon />
            <PostFooter posts={posts} />
            <PostComments posts={posts} />
        </View>
    )
}

const PostHeader = ({ posts }) => (
    <View style={styles.homeScreenPostHeaderContainer}>
        <TouchableOpacity>
            <View style={styles.homeScreenPostUserProfile}>
                <Image source={posts.profileImg} style={styles.homeScreenPostProfileImg} />
                <Text style={styles.homeScreenPostUser}>{posts.user}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/more.png')} style={styles.homeScreenPostMoreIcon}/>
        </TouchableOpacity>
    </View>
)

const PostImage = ({ posts }) => {
    return (
        <View>
            <Image source={posts.postImg} style={styles.homeScreenPostImage} resizeMode="cover" />
        </View>
    )
}

const PostIcon = () => {
    return (
        <View style={styles.homeScreenPostIconContainer}>
            <View style={styles.homeScreenPostIconLeftSide}>
                <TouchableOpacity>
                    <Image source={require('../../assets/Love-Icon.png')} style={styles.homeScreenPostIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Comment-Icon.png')} style={styles.homeScreenPostIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Message-Icon.png')} style={styles.homeScreenPostIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Save-Icon.png')} style={styles.homeScreenPostIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PostFooter = ({ posts }) => {
    return (
        <View style={styles.homeScreenPostFooterContainer}>
            <View>
                <Text style={styles.homeScreenPostLikesNum}>{posts.likes} likes</Text>
            </View>
            <View style={styles.homeScreenPostUserCaption}>
                <Text>
                    <Text style={styles.homeScreenPostUserName}>{posts.user} </Text>
                    <Text style={styles.homeScreenPostUserCaptionText}>{posts.caption}</Text>
                </Text>
            </View>
            
        </View>
    )
}

const PostComments = ({posts}) =>{
    return(
        <>
        <TouchableOpacity>
                <View style={styles.homeScreenPostCommentsTextContainer}>
                    <Text style={styles.homeScreenPostCommentsText}>View all {posts.commentCount} comments</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.homeScreenPostTimeContainer}>
                <Text style={styles.postTime}>{posts.postTime} ago</Text>
            </View>
        </>
    )
}

export default Posts