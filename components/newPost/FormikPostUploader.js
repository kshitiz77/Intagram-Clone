import { View, Text, TextInput, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { LOCATION } from '../../data/location'
import { MUSIC_LIST } from '../../data/music'

const PlaceholderImg = require('../../assets/instagram-icon.png')

import { USERS } from '../../data/users'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is require'),
    caption: Yup.string().max(2200, 'Caption has reached the character'),
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PlaceholderImg)
    return (
        <Formik
            initialValues={{ imageUrl: ' ', caption: ' ' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
        >
            {({ handleChange, handleBlur, error, values, handleSubmit, isValid }) => {
                return <>
                    <View style={styles.newPostContainer}>
                        <Image source={require('../../assets/Iron-Man.jpg')} style={styles.userImg} />
                        <TextInput
                            placeholder='Write a caption....'
                            placeholderTextColor='#fff'
                            style={styles.captionText}
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        ></TextInput>

                        <Image source={PlaceholderImg} style={styles.newPostImg} />
                    </View>
                    <Divider width={1} orientation='vertical' />
                    <Text style={styles.actionText}>Tag people</Text>
                    <Divider width={1} orientation='vertical' />
                    <Text style={styles.actionText}>Add location</Text>
                    <Divider width={1} orientation='vertical' />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={LOCATION}
                        horizontal={true}
                        renderItem={(element) => {
                            return (
                                <View style={styles.locationTextContainer}>
                                    <Text style={styles.locationText}>{element.item.city}, {element.item.country}</Text>
                                </View>
                            )
                        }}></FlatList>
                    <Divider width={1} orientation='vertical' />
                    <Text style={styles.actionText}>Add music</Text>
                    <Divider width={1} orientation='vertical' />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={MUSIC_LIST}
                        horizontal={true}
                        renderItem={(element) => {
                            return (
                                <View style={styles.locationTextContainer}>
                                    <Text style={styles.locationText}>{element.item.singer}, {element.item.song}</Text>
                                </View>
                            )
                        }}></FlatList>
                    <Divider width={1} orientation='vertical' />
                    <View style={styles.alsoPostToContainer}>
                        <Text style={styles.alsoPostToText}>Also post to</Text>
                        <View style={styles.postOnFacebookContainer}>
                            <View style={styles.postOnFacebookLeftSideContainer}>
                                <Image source={require('../../assets/Iron-Man.jpg')} style={styles.userImg} />
                                <View style={styles.postFacebookTextContainer}>
                                    <Text style={styles.facebookText}>Facebook</Text>
                                    <Text style={styles.userNameText}>Kshitiz Sharma</Text>
                                </View>
                            </View>
                            <View style={styles.postOnFacebookRightSideContainer}>
                                <Text style={{color:'#fff'}}>Kshitiz</Text>
                            </View>
                        </View>
                    </View>
                </>
            }
            }
        </Formik>
    )
}

const styles = StyleSheet.create({
    newPostContainer: {
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    newPostImg: {
        width: 70,
        height: 70
    },
    captionText: {
        fontSize: 20,
        color: '#fff'
    },
    imageUrl: {
        color: '#fff'
    },
    actionText: {
        color: '#fff',
        margin: 15,
        fontWeight: '400',
        fontSize: 16
    },
    locationTextContainer: {
        backgroundColor: '#333333',
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    locationText: {
        color: '#ababab'
    },
    alsoPostToContainer: {
        margin: 15
    },
    alsoPostToText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff'
    },
    postOnFacebookContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    postOnFacebookLeftSideContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    postFacebookTextContainer: {
        marginLeft: 15
    },
    facebookText: {
        color: '#fff',
        fontSize:16,
        fontWeight:'500'
    },
    userNameText: {
        color: '#ccc'
    }
})

export default FormikPostUploader