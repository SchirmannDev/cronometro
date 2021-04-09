import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class cronometro extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/relogio.png")} />
        <Text style={styles.timer}>0.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ef5c6c",
  },
  timer: {
    color: "#c6a46d",
    fontSize: 80,
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: -150,
  },
});
