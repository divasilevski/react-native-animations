import * as React from "react";
import { View, StyleSheet } from "react-native";
import AnimatedDigit from "./AnimatedDigit";

interface AnimatedNumberProps {
  value: number;
}

const usePrevious = (value: number) => {
  const ref = React.useRef<number>();
  React.useEffect(() => {
    ref.current = value;
  });

  if (typeof ref.current === "undefined") {
    return 0;
  }

  return ref.current;
};

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const prev = usePrevious(value);
  return (
    <View style={styles.container}>
      {value
        .toString()
        .split("")
        .map((digit, index) => {
          return (
            <AnimatedDigit
              key={value.toString().length - index}
              value={digit}
              prevValue={prev.toString().split("")[index]}
              direction={value > prev ? "up" : "down"}
            />
          );
        })}
    </View>
  );
};

export default AnimatedNumber;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
