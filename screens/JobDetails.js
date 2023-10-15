import {
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import useFetch from "../hooks/useFetch";
import { COLORS, SIZES, icons } from "../constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import { ActivityIndicator } from "react-native";
import Company from "../components/jobDetails/Company";
import JobTabs from "../components/jobDetails/JobTabs";
import Specifics from '../components/jobDetails/specifics/Specifics'
import About from '../components/jobDetails/about/About'
import Footer from '../components/jobDetails/footer/Footer'
import { ScrollView } from "react-native";

const tabs = ["About","Qualifications","Responsibilities"];
const JobDetails = ({ route }) => {
  const jobId = route.params ? route.params.jobId : undefined;
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: jobId,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab,setActiveTab] = useState(tabs[0])
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        console.log("in switch")
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        console.log("in switch about")
        return (
          <About info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };



  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
    
    >
     <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : data.length === 0 ? (
        <Text>no data</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <Company
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
          />
          <JobTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
           {displayTabContent()}
        </View>
      )}
      </ScrollView>
      <Footer url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({});
