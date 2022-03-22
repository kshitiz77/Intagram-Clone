import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { createRef } from 'react'
import { styles } from '../../styles'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Divider } from 'react-native-elements/dist/divider/Divider';

const ActionSheetAddPostMenu = [
  {
    icon: require('../../assets/activeGrid.png'),
    menuTitle: 'Post'
  },
  {
    icon: require('../../assets/Inactive-Reel-Icon.png'),
    menuTitle: 'Reel'
  },
  {
    icon: require('../../assets/instagram-stories.png'),
    menuTitle: 'Story'
  },
  {
    icon: require('../../assets/story-highlight.png'),
    menuTitle: 'Story Highlight'
  },
  {
    icon: require('../../assets/live.png'),
    menuTitle: 'Live'
  },
  {
    icon: require('../../assets/travel-guide.png'),
    menuTitle: 'Guide'
  }
]

const ActionSheetMenuList = [
  {
    icon: require('../../assets/setting.png'),
    menuTitle: 'Settings'
  },
  {
    icon: require('../../assets/Archive.png'),
    menuTitle: 'Archive'
  },
  {
    icon: require('../../assets/clock.png'),
    menuTitle: 'Your activity'
  },
  {
    icon: require('../../assets/qr-code.png'),
    menuTitle: 'QR Code'
  },
  {
    icon: require('../../assets/save.png'),
    menuTitle: 'Saved'
  },
  {
    icon: require('../../assets/save.png'),
    menuTitle: 'Close Friends'
  },
  {
    icon: require('../../assets/save.png'),
    menuTitle: 'COVID-19 Information Center'
  },
]
const [actionSheetPostMenuRef, actionSheetMenuRef ] = createRef();
const Header = () => {


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
            <Image style={styles.profileScreenHeaderAddPostIcon} source={require('../../assets/add-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.profileScreenHeaderMenuIcon} source={require('../../assets/menu.png')} />
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
            <TouchableOpacity>
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
            <Text style={styles.profileScreenActionSheeetTitleText}>Create</Text>
          </View>
          <Divider orientation='vertical'></Divider>
          {ActionSheetMenuList.map((menuList, index) =>(
            <TouchableOpacity>
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