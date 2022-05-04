import React from "react";
import { View, StyleSheet, ViewStyle, LayoutChangeEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Layout from "../constants/Layout";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const colors = {
  primary: "#e7e7e7",
  secondary: "#f3f3f3",
};

interface SkeletonProps {
  style?: ViewStyle;
  offset?: number;
  duration?: number;
  lineWidth?: number;
}

const Skeleton = (props: SkeletonProps) => {
  const { style, offset = 0, duration = 800, lineWidth = 60 } = props;

  const ref = React.useRef<View>(null);
  const sharedValue = useSharedValue(0);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.measure((...args) => {
        const xOffset = -args[4] + offset;
        const width = Layout.window.width + xOffset;

        sharedValue.value = xOffset;
        sharedValue.value = withRepeat(
          withTiming(width, {
            duration,
            easing: Easing.inOut(Easing.ease),
          }),
          -1,
          false
        );
      });
    }
  }, [ref.current]);

  const animatedStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: sharedValue.value }] };
  });

  return (
    <View
      style={[{ overflow: "hidden", backgroundColor: colors.primary }, style]}
      ref={ref}
    >
      {/* <AnimatedLinearGradient
        style={[{ width: lineWidth, height: "100%" }, animatedStyles]}
        colors={[colors.primary, colors.secondary, colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      /> */}
      <Animated.View
        style={[
          {
            width: lineWidth,
            height: "100%",
            backgroundColor: colors.secondary,
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

export default Skeleton;
