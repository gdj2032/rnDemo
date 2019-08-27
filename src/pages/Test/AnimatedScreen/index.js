import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import FadeOutAnimated from "./FadeOutAnimated";
import TimingAnimated from "./TimingAnimated";
import SpringAnimated from "./SpringAnimated";
import DecayAnimated from "./DecayAnimated";
import ParallelAnimated from "./ParallelAnimated";
import SequenceAnimated from "./SequenceAnimated";
import StaggerAnimated from "./StaggerAnimated";

export default class AnimatedScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <FadeOutAnimated/>
          <TimingAnimated/>
          <SpringAnimated/>
          <DecayAnimated/>
          <ParallelAnimated/>
          <SequenceAnimated/>
          <StaggerAnimated/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
  }
});
