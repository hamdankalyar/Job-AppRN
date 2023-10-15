import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const ScreenHeaderBtn = ({iconURL,dimension,handlePress}) => {
  console.log(iconURL)
  return (
   
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress} >
   <Image
      source={iconURL}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    
  )
}

export default ScreenHeaderBtn

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
      },
      btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
      }),
})