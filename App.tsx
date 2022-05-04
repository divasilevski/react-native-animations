import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AnimatedNumber from "./components/AnimatedNumber";
import Card from "./components/Card";
import Simultaneously from "./components/Simultaneously";

import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [value, setValue] = React.useState(123);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          {/* <Card /> */}
          {/* <Simultaneously /> */}
          <AnimatedNumber value={value} />
          <AnimatedNumber value={value + 12} />
          <AnimatedNumber value={value + 22} />
          <AnimatedNumber value={value + 132} />
          <AnimatedNumber value={value + 142} />
          <AnimatedNumber value={value + 152} />
          <View style={{ marginTop: 20 }}>
            <Button title="click +" onPress={() => setValue(value + 1)} />
            <Button title="click -" onPress={() => setValue(value - 1)} />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  // layout
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
