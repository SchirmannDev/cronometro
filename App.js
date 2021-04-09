import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 0, botao: "Start" };
    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    let s = this.state;
    if (this.timer != null) {
      //parar o timer
      clearInterval(this.timer);
      this.timer = null;
      s.botao = "Start";
    } else {
      //começar o timer
      this.timer = setInterval(() => {
        let s = this.state;
        s.n += 1;
        this.setState(s);
      }, 1000);
      s.botao = "Stop";
    }
    this.setState(s);
  }

  stop() {
    if (this.timer != null) {
      //parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    let s = this.state;
    s.n = 0;
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/relogio.png")} />
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.start}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.stop}>
            <Text style={styles.botaoText}>Clear</Text>
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
