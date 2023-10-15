import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES, icons, images } from "../../constants";
import { TouchableOpacity } from "react-native";
const jobTypes = ['Full-time','Part-time','Contractor'];
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  
  const [activeJobType,setActiveJobType] = useState('Part-time')
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textName}>Hello Hamdan</Text>
        <Text style={styles.textHeading}>Find your perfect job</Text>
        <View style={styles.textBtnCotainer}>
          <TextInput
            placeholder="what are you looking for ?"
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchBtn}
          onPress={handleClick}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
            <FlatList
            data={jobTypes}
            keyExtractor={(item)=>item}
            renderItem={({item})=>(
               <TouchableOpacity style={styles.tab(activeJobType,item)}
               onPress={()=>{
                setActiveJobType(item)
               }}
               >
                <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
               </TouchableOpacity>
            )}
            
            contentContainerStyle={{columnGap:SIZES.small}}
            horizontal


            />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  textName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  textHeading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 2,
  },
  textBtnCotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
    height: 40,
  },
  searchInput: {
    paddingHorizontal: 15,
    
    fontFamily: FONT.regular,
    backgroundColor: COLORS.white,
    width: "85%",
    borderRadius: SIZES.medium,
    color:COLORS.gray2
  },
  searchBtn: {
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    height: "100%",
    padding: 5,
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: "65%",
    height: "65%",
    tintColor: COLORS.lightWhite,
  },
  tabContainer:{
    width: "100%",
    marginTop:10,
  },
  tab:(activeJobType,item)=>({
    
    borderWidth:1,
   
    borderRadius:SIZES.medium,
   
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderColor:activeJobType===item?COLORS.primary:COLORS.gray2,
  }),
  tabText:(activeJobType,item)=>({
    textAlign:'center',
    fontFamily:FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    

  })
});
