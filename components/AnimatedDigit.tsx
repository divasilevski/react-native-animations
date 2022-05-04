import * as React from "react";
import { Text, View, StyleSheet, LayoutRectangle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedDigitProps {
  value: string;
  prevValue: string;
  direction?: "up" | "down";
}

const AnimatedDigit = ({ value, prevValue, direction }: AnimatedDigitProps) => {
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);
  const sharedValue = useSharedValue(0);

  React.useEffect(() => {
    if (layout) {
      sharedValue.value = -layout.height;
      sharedValue.value = withTiming(
        direction === "up" ? 0 : -layout.height * 2,
        {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }
      );
    }
  }, [value]);

  const aniamtedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sharedValue.value }],
  }));

  return (
    <View style={styles.container}>
      {Boolean(layout) ? (
        <View
          style={{
            overflow: "hidden",
            height: layout?.height,
            width: layout?.width,
          }}
        >
          <Animated.View style={aniamtedStyle}>
            <Text>{value}</Text>
            <Text>{prevValue}</Text>
            <Text>{value}</Text>
          </Animated.View>
        </View>
      ) : (
        <Text children={value} />
      )}

      <Text
        style={styles.hidden}
        onLayout={(e) => setLayout(e.nativeEvent.layout)}
        children={0}
      />
    </View>
  );
};

export default AnimatedDigit;

const styles = StyleSheet.create({
  container: {},
  hidden: {
    position: "absolute",
    opacity: 0,
  },
});
