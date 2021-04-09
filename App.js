import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/relogio.png")} />
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoText}>VAI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoText}>PARAR</Text>
          </TouchableOpacity>
        </View>
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
  botaoArea: {
    flexDirection: "row",
    height: 40,
    marginTop: 70,
  },
  botao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c6a46d",
    height: 40,
    borderRadius: 15,
    margin: 20,
  },
  botaoText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#edda7c",
  },
});
