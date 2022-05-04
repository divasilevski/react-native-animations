import * as React from "react";
import { View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";

import Skeleton from "./Skeleton";

interface SimultaneouslyProps {}

const Simultaneously = (props: SimultaneouslyProps) => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.box} lineWidth={40} duration={1500} />
      <Skeleton
        style={styles.box}
        offset={Layout.window.width / 2}
        lineWidth={40}
        duration={1500}
      />
    </View>
  );
};

export default Simultaneously;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50,
    width: "100%",
  },
  box: {
    width: 120,
    height: 50,
    borderRadius: 50,
  },
});
