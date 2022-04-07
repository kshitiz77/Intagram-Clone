import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { createContext } from 'react'
import { useSelector } from 'react-redux'
import AddNewPost from '../components/newPost/AddNewPost'
const PlaceholderImg = require('../assets/images/instagram-icon.png')
export const NewPostContext = createContext();

const NewPostScreen = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceholderImg)
  const [caption, setCaption] = useState('')
  const [tagPeople, setTagPeople] = useState()
  const [addLocation, setAddLocation] = useState('')
  const [addMusic, setAddMusic] = useState('')
  const [isFBEnabled, setIsFBEnabled] = useState(false);
  const [isTwitterEnabled, setIsTwitterEnabled] = useState(false);
  const [isTumblrEnabled, setIsTumblrEnabled] = useState(false);
  const userPostImage = useSelector((state) => state.userPosts.userPostsImage)

  const contextValue = {
    thumbnailUrl: thumbnailUrl,
    setThumbnailUrl: setThumbnailUrl,
    caption: caption,
    setCaption: setCaption,
    tagPeople: tagPeople,
    setTagPeople: setTagPeople,
    addLocation: addLocation,
    setAddLocation: setAddLocation,
    addMusic: addMusic,
    setAddMusic: setAddMusic,
    isFBEnabled: isFBEnabled,
    setIsFBEnabled: setIsFBEnabled,
    isTwitterEnabled: isTwitterEnabled,
    setIsTwitterEnabled: setIsTwitterEnabled,
    isTumblrEnabled: isTumblrEnabled,
    setThumbnailUrl: setThumbnailUrl,
    userPostImage: userPostImage
  }
  return (
    <>
      <NewPostContext.Provider value={contextValue}>
        <AddNewPost/>
      </NewPostContext.Provider>
    </>

  )
}

export default NewPostScreen