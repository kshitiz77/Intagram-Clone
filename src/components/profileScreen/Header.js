import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { createRef } from 'react'
import types from '../../redux/types';
import { styles } from '../../styles/styles'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Divider } from 'react-native-elements/dist/divider/Divider';
import AddNewPost from '../newPost/AddNewPost';
import { uploadImage } from '../../redux/actions/post';
import { useDispatch } from 'react-redux';
import {launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker'

const ActionSheetAddPostMenu = [
  {
    icon: require('../../assets/images/activeGrid.png'),
    menuTitle: 'Post'
  },
  {
    icon: require('../../assets/images/Inactive-Reel-Icon.png'),
    menuTitle: 'Reel'
  },
  {
    icon: require('../../assets/images/instagram-stories.png'),
    menuTitle: 'Story'
  },
  {
    icon: require('../../assets/images/story-highlight.png'),
    menuTitle: 'Story Highlight'
  },
  {
    icon: require('../../assets/images/live.png'),
    menuTitle: 'Live'
  },
  {
    icon: require('../../assets/images/travel-guide.png'),
    menuTitle: 'Guide'
  }
]

const ActionSheetMenuList = [
  {
    icon: require('../../assets/images/setting.png'),
    menuTitle: 'Settings'
  },
  {
    icon: require('../../assets/images/Archive.png'),
    menuTitle: 'Archive'
  },
  {
    icon: require('../../assets/images/clock.png'),
    menuTitle: 'Your activity'
  },
  {
    icon: require('../../assets/images/qr-code.png'),
    menuTitle: 'QR Code'
  },
  {
    icon: require('../../assets/images/save.png'),
    menuTitle: 'Saved'
  },
  {
    icon: require('../../assets/images/save.png'),
    menuTitle: 'Close Friends'
  },
  {
    icon: require('../../assets/images/covid-icon.png'),
    menuTitle: 'COVID-19 Information Center'
  },
]
const actionSheetPostMenuRef  = createRef();
const actionSheetMenuRef = createRef();

const Header = ({navigation}) => {
const dispatch = useDispatch();

  const selectPost = (event, title) =>{
    if(title === 'Post'){
      const options:ImageLibraryOptions ={
        mediaType: 'photo, video',
        quality: 0.8
      }
      launchImageLibrary(options, (response) =>{
        const image = response.assets[0]
        dispatch({type: types.UPLOAD_IMAGE, payload : image});
        navigation.navigate(title)
      })
    }else{
      return null;
    }
  }

  return (
    <>
      <View style={styles.profileScreenHeaderContainer}>
        <View style={styles.profileScreenHeaderLeftSideContainer}>
          <Text style={styles.profileScreenHeaderUserName}>_Iron_Man___</Text>
        </View>
        <View style={styles.profileScreenHeaderRightSideContainer}>
          <TouchableOpacity onPress={() => {
            actionSheetPostMenuRef.current?.setModalVisible();
          }}>
            <Image style={styles.profileScreenHeaderAddPostIcon} source={require('../../assets/images/add-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            actionSheetMenuRef.current?.setModalVisible();
          }}>
            <Image style={styles.profileScreenHeaderMenuIcon} source={require('../../assets/images/menu.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <ActionSheet ref={actionSheetPostMenuRef}>
        <View style={styles.profileScreenActionSheeetContainer}>
          <View style={styles.profileScreenActionSheeetHeader}>
            <View style={styles.profileScreenActionSheeetCloseBtn}>
            </View>
            <Text style={styles.profileScreenActionSheeetTitleText}>Create</Text>
          </View>
          <Divider orientation='vertical'></Divider>
          {ActionSheetAddPostMenu.map((menuList, index) =>(
            
            <TouchableOpacity key={index} onPress={(event) => selectPost(event, menuList.menuTitle)}>
          <View style={styles.profileScreenActionSheeetMenuContainer}>
            <Image source={menuList.icon} style={styles.profileScreenActionSheeetMenuIcon}/>
            <Text style={styles.profileScreenActionSheeetMenuTitle}>{menuList.menuTitle}</Text>
          </View>
            </TouchableOpacity>
          ))}
        </View>
      </ActionSheet>
      <ActionSheet ref={actionSheetMenuRef}>
        <View style={styles.profileScreenActionSheeetContainer}>
          <View style={styles.profileScreenActionSheeetHeader}>
            <View style={styles.profileScreenActionSheeetCloseBtn}>
            </View>
          </View>
          {ActionSheetMenuList.map((menuList, index) =>(
            <TouchableOpacity key={index} onPress={() =>{navigation.push(menuList.menuTitle)}}>
          <View style={styles.profileScreenActionSheeetMenuContainer}>
            <Image source={menuList.icon} style={styles.profileScreenActionSheeetMenuIcon}/>
            <Text style={styles.profileScreenActionSheeetMenuTitle}>{menuList.menuTitle}</Text>
          </View>
            </TouchableOpacity>
          ))}
        </View>
      </ActionSheet>
    </>
  )
}


export default Header