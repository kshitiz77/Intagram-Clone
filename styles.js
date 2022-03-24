import { StyleSheet, Dimensions, StatusBar } from "react-native";
const win = Dimensions.get('window');
const ratio = win.width / 440;

export const styles = StyleSheet.create({

  // Home Screen Style Open //
  homeScreenContainer: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop:20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    width: 15,
    height: 15
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
  // Home Screen Bottom Container Style Close//
  // Home Screen Style Open //

  // Add New Post Screen Open //
  addNewPostScreenContainer: {
    flex:1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
    backgroundColor: '#000',
    paddingTop:40,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  // Profile Screen Header Container Style Open //
  profileScreenHeaderContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  profileScreenHeaderUserName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  profileScreenHeaderRightSideContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileScreenHeaderAddPostIcon: {
    width: 25,
    height: 25,
  },
  profileScreenHeaderMenuIcon: {
    width: 20,
    height: 27,
    marginLeft: 25
  },
  // Profile Screen Header Container Style Close //

  // Profile Screen User Details Container Style Open //
  userDetailsContainer: {
    marginVertical: 10,
    marginHorizontal: 15
  },
  userDetailsTopContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetailsLeftSideContainer: {
    width: win.width / 3,
  },
  userDetailsUserImage: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  userDetailsRightSideContainer: {
    width: win.width / 1.7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userDetailsCountContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  userDetailsCountNum: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  userDetailsCountText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '400'
  },
  userDetailsBioContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  userDetailsUserName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  userDetailsBioText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400'
  },
  userDetailsBottomContainer: {
    flexDirection: 'row',
  },
  userDetailsEditProfileTextContainer: {
    width: '88%',
    borderWidth: 1,
    borderColor: '#5c5c5c',
    borderRadius: 5,
    padding: 5
  },
  userDetailsEditProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  userDetailsAddFriendIconContainer: {
    width: '10%',
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#5c5c5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  userDetailsAddFriendIcon: {
    width: 20,
    height: 20,
  },
  // Profile Screen User Details Container Style Close //

  // Profile Screen Discover People Container Style Open //
  discoverPeopleContainer: {
    marginVertical: 10
  },
  discoverPeopleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  discoverPeopleText: {
    color: '#fff'
  },
  discoverPeopleSeeAllPeopleText: {
    color: '#1a89d9',
    fontWeight: '500'
  },
  discoverPeopleBodyContainer: {
    borderColor: '#424242',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 12,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  discoverPeopleUserImageContainer: {
    flexDirection: 'row',
  },
  discoverPeopleUsersImage: {
    marginHorizontal: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  discoverPeopleCloseIcon: {
    width: 10,
    height: 10
  },
  discoverPeopleNameContainer: {
    marginVertical: 8,
    alignItems: 'center'
  },
  discoverPeopleName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  discoverPeopleFollowDetails: {
    color: '#fff',
    fontSize: 12
  },
  discoverPeopleFollowBtn: {
    backgroundColor: '#4ba4e3',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 3,
    borderRadius: 5
  },
  profileTabIcon: {
    width: 24,
    height: 24,
  },
  // Profile Screen Discover People Container Style Close //
  // Profile Screen Action Sheet Container Style Open//
  profileScreenActionSheeetContainer: {
    height: 390, 
    backgroundColor: '#333333', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10
  },
  profileScreenActionSheeetCloseBtn:{
   width:40,
   borderColor:'#ccc',
   borderWidth:2,
   borderRadius:5
  },
  profileScreenActionSheeetHeader:{
    alignItems: 'center', 
    paddingTop:10,
  },
  profileScreenActionSheeetTitleText:{
    fontSize:18,
    fontWeight:'700',
    marginVertical:8,
    color:'#fff'
  },
  profileScreenActionSheeetMenuContainer:{
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:25,
    alignItems:'center'
  },
  profileScreenActionSheeetMenuIcon:{
    width:22,
    height:22
  },
  profileScreenActionSheeetMenuTitle:{
    color:'#fff',
    marginLeft:15,
    fontSize:16,
    fontWeight:'500'
  },
  // Profile Screen Action Sheet Container Style Close //
// Profile Screen Your Posts Container Style Open //
  yourPostsContainer:{
    flex:1,
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
  yourPostsImgContainer:{
    flexDirection:'row',
    marginVertical:2
  },
  // Profile Screen Your Posts Container Style Close //
  // Profile Screen Tag Posts Container Style Open //
  tagPostsContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tagPostIconContainer: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 80,
    marginBottom:8
  },
  tagPostIcon: {
    width: 50,
    margin: 20,
    height: 50
  },
  tagPostTitleContainer:{

  },
  tagPostTitle:{
    fontSize:22,
    fontWeight:'700',
    color:'#fff',
    textAlign:'center',
  },
  tagPostDescription:{
    width:win.width/1.6,
    color:'#ccc',
    textAlign:'center',
    marginTop:8
  },
  // Profile Screen Tag Posts Container Style Close //
  //  Profile Screen Style Close//
})