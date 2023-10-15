import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONT, SIZES } from "../../constants";
import NearbyCard from "../common/nearbyCard/NearbyCard";
import { ActivityIndicator } from "react-native";


const NearbyJobs = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingsContainer}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
        data?.map((job)=>(
          <NearbyCard 
          job={job}
          key={`nearby-job-${job.job_id}`}
          handleNavigation={()=>navigation.navigate('JobDetails',{jobId:job.job_id})}
          />
        )
       )
       )}
      </View>
    </View>
  );
};

export default NearbyJobs;

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
