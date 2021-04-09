import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class cronometro extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/relogio.png")} />
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
});
