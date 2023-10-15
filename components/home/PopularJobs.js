import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { COLORS, FONT, SIZES } from "../../constants";
import PopularCard from "../common/popularCard/PopularCard";
import { ActivityIndicator } from "react-native";

const PopularJobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingsContainer}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
      {isLoading?(
        <ActivityIndicator  />
       ):error?(
        <Text>Something went wrong</Text>
       ):(
        <FlatList
          data={data}
          renderItem={({ item }) =>(
          <PopularCard item={item} />
          ) }
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
       )}
      </View>
    </View>
  );
};

export default PopularJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headerTitle: {
    fontFamily: FONT.bold,
    color: COLORS.primary,
    fontSize: SIZES.large,
  },
  headerBtn: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});
