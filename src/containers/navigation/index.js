import React from "react";
import { StyleSheet } from "react-native";
import { Route } from "../../common/routing";
import Navbar from "../../components/navbar";
import View from "../../components/view";
import Home from "./home";
import About from "./about";
import Topics from "./topics";

const main = props => {
  const nav = [
    {
      title: "Home",
      nav: "/"
    },
    {
      title: "About",
      nav: "/about"
    },
    {
      title: "Topics",
      nav: "/topics"
    }
  ];

  return (
    <View style={styles.container}>
      <Navbar items={nav} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default main;
