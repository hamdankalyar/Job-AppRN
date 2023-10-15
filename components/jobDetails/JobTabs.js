import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../constants'
import { SHADOWS } from '../../constants';
function TabButton({ name, activeTab, onHandleSearchType }) {
  
    return (
      <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
      >
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
      </TouchableOpacity>
    );
  }
  
  const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TabButton
              name={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab(item)}
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };
  

export default JobTabs

const styles = StyleSheet.create({
    container: {
      marginTop: SIZES.small,
      marginBottom: SIZES.small / 2,
    },
    btn: (name, activeTab) => ({
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.xLarge,
      backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
      borderRadius: SIZES.medium,
      marginLeft: 2,
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    }),
    btnText: (name, activeTab) => ({
      fontFamily: "DMMedium",
      fontSize: SIZES.small,
      color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),
  });