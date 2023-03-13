import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color ,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onpress={() => onIncrease } title={`Increase ${color}`} />
      <Button onpress={() => onDecrease } title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
