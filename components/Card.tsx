import * as React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "./Skeleton";

const Card = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} />

      <View style={styles.body}>
        <Skeleton style={styles.avatar} />
        <View style={styles.info}>
          <Skeleton style={styles.row} />
          <Skeleton style={styles.row} />
        </View>
      </View>

      <View style={styles.footer}>
        <Skeleton style={styles.button} />
        <Skeleton style={styles.button} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    elevation: 9,
    backgroundColor: "white",
  },
  body: {
    flexDirection: "row",
    padding: 20,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  // skeletons
  image: {
    width: "100%",
    height: 250,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  row: {
    width: "100%",
    height: 20,
    borderRadius: 10,
  },
  button: {
    width: "40%",
    height: 30,
    borderRadius: 30,
  },
});
