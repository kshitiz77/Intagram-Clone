import { View, Text, TextInput, Image, StyleSheet, FlatList, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { LOCATION } from '../../data/location'
import { MUSIC_LIST } from '../../data/music'
import { styles } from '../../styles'

const PlaceholderImg = require('../../assets/instagram-icon.png')

import { USERS } from '../../data/users'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is require'),
    caption: Yup.string().max(2200, 'Caption has reached the character'),
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PlaceholderImg)
    const [isFBEnabled, setIsFBEnabled] = useState(false);
    const [isTwitterEnabled, setIsTwitterEnabled] = useState(false);
    const [isTumblrEnabled, setIsTumblrEnabled] = useState(false);

    const toggleFBSwitchBtn = () => setIsFBEnabled(previousState => !previousState);
    const toggleTwitterSwitchBtn = () => setIsTwitterEnabled(previousState => !previousState);
    const toggleTumblrSwitchBtn = () => setIsTumblrEnabled(previousState => !previousState);

    return (
        <Formik
            initialValues={{ imageUrl: ' ', caption: ' ' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
        >
            {({ handleChange, handleBlur, error, values, handleSubmit, isValid }) => {
                return <>
                    <View style={styles.addNewPostContainer}>
                        <View style={styles.addNewPostLeftContainer}>
                            <Image source={require('../../assets/Iron-Man.jpg')} style={styles.addNewPostUserImg} />
                            <TextInput
                                placeholder='Write a caption....'
                                placeholderTextColor='white'
                                style={styles.addNewPostCaptionText}
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            ></TextInput>
                        </View>
                        <Image source={PlaceholderImg} style={styles.addNewPostImg} />
                    </View>
                    <Divider width={1} orientation='vertical' />
                    <TouchableOpacity>
                    <Text style={styles.addNewPostActionText}>Tag people</Text>
                    </TouchableOpacity>
                    <Divider width={1} orientation='vertical' />
                    <TouchableOpacity>
                    <Text style={styles.addNewPostActionText}>Add location</Text>
                    </TouchableOpacity>
                    <Divider width={1} orientation='vertical' />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={LOCATION}
                        horizontal={true}
                        renderItem={(element) => {
                            return (
                                <View style={styles.addNewPostLocationTextContainer}>
                                    <Text style={styles.addNewPostLocationText}>{element.item.city}, {element.item.country}</Text>
                                </View>
                            )
                        }}></FlatList>
                    <Divider width={1} orientation='vertical' />
                    <TouchableOpacity>
                    <Text style={styles.addNewPostActionText}>Add music</Text>
                    </TouchableOpacity>
                    <Divider width={1} orientation='vertical' />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={MUSIC_LIST}
                        horizontal={true}
                        renderItem={(element) => {
                            return (
                                <View style={styles.addNewPostLocationTextContainer}>
                                    <Text style={styles.addNewPostLocationText}>{element.item.singer}, {element.item.song}</Text>
                                </View>
                            )
                        }}></FlatList>
                    <Divider width={1} orientation='vertical' />
                    <View style={styles.addNewPostAlsoPostToContainer}>
                        <Text style={styles.addNewPostAlsoPostToText}>Also post to</Text>
                        <View style={styles.addNewPostPostOnFacebookContainer}>
                            <View style={styles.addNewPostPostOnFacebookLeftSideContainer}>
                                <Image source={require('../../assets/Iron-Man.jpg')} style={styles.addNewPostUserImg} />
                                <View style={styles.addNewPostPostFacebookTextContainer}>
                                    <Text style={styles.addNewPostFacebookText}>Facebook</Text>
                                    <Text style={styles.addNewPostUserNameText}>Iron Man</Text>
                                </View>
                            </View>
                            <View style={styles.addNewPostPostOnFacebookRightSideContainer}>
                                <Switch
                                   trackColor={{ false: "#767577", true: "#2e4f87" }}
                                   thumbColor={isFBEnabled ? "#45a8ff" : "#f4f3f4"}
                                   ios_backgroundColor="#3e3e3e"
                                   onValueChange={toggleFBSwitchBtn}
                                   value={isFBEnabled}
                                />
                            </View>
                        </View>
                        <View style={styles.addNewPostPostOnFacebookContainer}>
                            <View style={styles.addNewPostPostOnFacebookLeftSideContainer}>
                                <Text style={styles.addNewPostFacebookText}>Twitter</Text>
                            </View>
                            <View style={styles.addNewPostPostOnFacebookRightSideContainer}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#2e4f87" }}
                                    thumbColor={isTwitterEnabled ? "#45a8ff" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleTwitterSwitchBtn}
                                    value={isTwitterEnabled}
                                />
                            </View>
                        </View>
                        <View style={styles.addNewPostPostOnFacebookContainer}>
                            <View style={styles.addNewPostPostOnFacebookLeftSideContainer}>
                                <Text style={styles.addNewPostFacebookText}>Tumblr</Text>
                            </View>
                            <View style={styles.addNewPostPostOnFacebookRightSideContainer}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#2e4f87" }}
                                    thumbColor={isTumblrEnabled ? "#45a8ff" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleTumblrSwitchBtn}
                                    value={isTumblrEnabled}
                                />
                            </View>
                        </View>
                    </View>
                        <Divider width={1} orientation='vertical' />
                        <TouchableOpacity>
                            <Text style={styles.addNewPostAdvancedSettingsText}>Advanced settings</Text>
                        </TouchableOpacity>
                </>
            }
            }
        </Formik>
    )
}

export default FormikPostUploader