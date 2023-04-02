import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { mainAppStyles } from "./styles";
import ListHead from "./Component/listHead";
import axios from "axios";

const API_KEY = "f44ac504ecmshd249e116f13ca98p190060jsn1a6a2479ff94";
const API_URL = "https://dad-jokes.p.rapidapi.com/random/joke";
const JOKES_PER_LOAD = 15;

const App = () => {
  // State variables to store the jokes and loading status
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch jokes from the API
  const fetchJokes = async () => {
    try {
      setLoading(true); // Set loading to true to show loading indicator
      const response = await axios.get(API_URL + `?count=${JOKES_PER_LOAD}`, {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        },
      });
      setJokes([...jokes, ...response.data.body]); // Add the new jokes to the existing ones
      setLoading(false); // Set loading to false to hide the loading indicator
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  // Call the fetchJokes function on component mount
  useEffect(() => {
    fetchJokes();
  }, []);

  // Function to render each item in the list
  const renderItem = ({ item, index }) => (
    <View style={mainAppStyles.item}>
      <Text style={mainAppStyles.setupText}>{item.setup}</Text>
      <Text style={mainAppStyles.punchlineText}>{item.punchline}</Text>
    </View>
  );

  // Function to handle the "end reached" event and load more jokes
  const handleLoadMore = () => {
    fetchJokes();
  };

  // Function to render the loading indicator
  const renderFooter = () => {
    if (loading) {
      return (
        <View style={mainAppStyles.loading}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={mainAppStyles.container}>
      <ListHead />
      <View style={mainAppStyles.content}>
        <FlatList
          data={jokes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={mainAppStyles.listContent}
        />
      </View>
    </View>
  );
};

export default App;
