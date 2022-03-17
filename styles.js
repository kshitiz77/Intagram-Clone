import { StyleSheet, Dimensions } from "react-native";
const win = Dimensions.get('window');
const ratio = win.width / 440;

export const styles = StyleSheet.create({

  // Home Screen Style Open //
  homeScreenContainer: {
    backgroundColor: 'black',
    flex: 1,
  },

  // Home Screen Header Style Open//
  homeScreenHeaderContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  appLogo: {
    width: 120,
    height: 60,
    resizeMode: 'contain'
  },
  homeScreenHeaderIconsContainer: {
    flexDirection: 'row',
  },
  homeScreenHeaderIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 20
  },
  homeScreenHeaderUnreadBadge: {
    backgroundColor: "#ff5e5e",
    position: 'absolute',
    left: 30,
    bottom: 16,
    width: 25,
    height: 18,
    borderRadius: 15,
    alignItems: 'center',
    zIndex: 1001,
  },
  homeScreenHeaderUnreadBadgeText: {
    color: '#fff',
    fontWeight: '600',
  },
  // Home Screen Header Style Close//
  // Home Screen Stories Container Style Open//
  homeScreenStoriesContainer: {
    marginHorizontal: 5,
    alignItems: 'center',
    marginVertical: 5
  },
  homeScreenAddStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  homeScreenAddStoryBtn: {
    backgroundColor: "#3dadfc",
    borderWidth: 2,
    borderColor: '#001f59',
    position: 'absolute',
    left: 45,
    bottom: 18,
    width: 22,
    height: 22,
    borderRadius: 50,
    alignItems: 'center',
    zIndex: 1001,
  },


  homeScreenAddStoryText: {
    color: '#fff',
    fontWeight: '600',
  },
  homeScreenStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f5a142'
  },
  homeScreenStoryUserName: {
    color: '#fff'
  },
  // Home Screen Stories Container Style Close//

  // Home Screen Posts Container Style Open//
  homeScreenPostContainer: {
    marginTop: 8,
  },
  homeScreenPostHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 7,
  },
  homeScreenPostUserProfile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  homeScreenPostProfileImg: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f5a142'
  },
  homeScreenPostUser: {
    marginLeft: 7,
    color: '#fff',
    fontWeight: '700',
  },
  homeScreenPostMoreIcon: {
    width: 20,
    height: 20
  },
  homeScreenPostImage: {
    width: win.width,
    height: win.width,
    resizeMode: 'contain'

  },
  homeScreenPostIconContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 10
  },
  homeScreenPostIconLeftSide: {
    flexDirection: 'row'
  },
  homeScreenPostIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  homeScreenPostFooterContainer: {
    marginHorizontal: 15,
  },
  homeScreenPostLikesNum: {
    color: '#fff',
    fontWeight: '900',
  },
  homeScreenPostUserCaption: {
    flexDirection: 'row',
    marginVertical: 5
  },
  homeScreenPostUserName: {
    color: '#fff',
    fontWeight: '700',
  },
  homeScreenPostUserCaptionText: {
    color: '#fff',
  },
  homeScreenPostCommentsTextContainer: {
    marginHorizontal: 14
  },
  homeScreenPostCommentsText: {
    color: '#858585',
    fontWeight: '400',
    fontSize: 16,
    marginVertical: 2,
  },
  homeScreenPostTimeContainer: {
    color: '#858585',
    fontSize: 12,
    marginVertical: 2,
    marginHorizontal: 14
  },
  // Home Screen Posts Container Style Close//

  // Home Screen Bottom Container Style Open//
  homeScreenBottomWrapper: {

  },
  homeScreenBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  homeScreenBottonIcon: {
    width: 25,
    height: 25
  },
  homeScreenProfilePic: (activeTabIcon) => ({
    borderWidth: activeTabIcon === 'Profile' ? 2 : 0,
    borderRadius: 50,
    borderColor: '#fff'
  }),
  // Home Screen Bottom Container Style Close//
  // Home Screen Style Open //

  // Add New Post Screen Open //
  addNewPostScreencontainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  // Add New Post Screen Header Open//
  addNewPostScreenHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  addNewPostScreenLeftSideHeader: {
    flexDirection: 'row'
  },
  addNewPostScreenBackBtn: {
    width: 30,
    height: 30
  },
  addNewPostScreenHeaderText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 15,
  },
  addNewPostScreenCheckIcon: {
    width: 30,
    height: 30
  },
  // Add New Post Screen Header Close//

  // Add New Post Screen Post Container Open//

  addNewPostContainer: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  addNewPostLeftContainer: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  addNewPostUserImg: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  addNewPostCaptionText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  addNewPostImg: {
    width: 70,
    height: 70
  },
  addNewPostActionText: {
    color: '#fff',
    margin: 12,
    fontWeight: '400',
    fontSize: 16
  },
  addNewPostLocationTextContainer: {
    backgroundColor: '#333333',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4
  },
  addNewPostLocationText: {
    color: '#ababab'
  },
  addNewPostAlsoPostToContainer: {
    margin: 12
  },
  addNewPostAlsoPostToText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff'
  },
  addNewPostPostOnFacebookContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addNewPostPostOnFacebookLeftSideContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addNewPostPostFacebookTextContainer: {
    marginLeft: 15
  },
  addNewPostFacebookText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  addNewPostUserNameText: {
    color: '#ccc'
  },
  addNewPostAdvancedSettingsText: {
    color: '#ccc',
    marginVertical: 10,
    marginHorizontal: 15

  },
  // Add New Post Screen Post Container Close//
  // Add New Post Screen Close //

  //  Profile Screen Style Open//

  profileScreenContainer: {
    flex: 1,
    backgroundColor: '#000'
  }
  //  Profile Screen Style Close//
})