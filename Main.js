import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { ScrollView } from "react-native";
import Welcome from "./components/home/Welcome";
import { COLORS, SIZES } from "./constants";
import PopularJobs from "./components/home/PopularJobs";
import NearbyJobs from "./components/home/NearbyJobs";

const Main = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              navigation.navigate('search',{
                term:searchTerm
              })
            }
          }}
        />
        <PopularJobs />
        <NearbyJobs />
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({});
