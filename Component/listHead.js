import React from "react";
import { View, Text } from "react-native";
import { headerStyles } from "./globalStyle";

export default function ListHead() {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>Dad Jokes...!!!</Text>
    </View>
  );
}
