import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useFetch = (endpoints,query) => {
    const [data,setData]= useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]= useState(null)

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoints}`,
      params: {
        ...query
      },
      headers: {
        'X-RapidAPI-Key': '4a2266aad6mshe050b0f13f9b23dp19ebccjsn33b3dc7e7791',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data)
           
        }
        catch(error){
            setError(error);
            alert('There is an error')
        }
        finally{
            setIsLoading(false);
        }
    }
useEffect(()=>{
    fetchData();
},[]);
const refetch = ()=>{
    fetchData();
}
return {
    data,
    isLoading,
    error,
    refetch,
};
}

export default useFetch

