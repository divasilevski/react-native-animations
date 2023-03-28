import React from "react";
import { View, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Layout from "../constants/Layout";

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

  const aref = useAnimatedRef<View>();
  const sharedValue = useSharedValue(0);

  React.useEffect(() => {
    if (aref.current) {
      aref.current.measure((...args) => {
        console.log(args[4]);

        const left = -args[4] + offset;
        const right = Layout.window.width + left;
        const config = { duration, easing: Easing.inOut(Easing.ease) };

        sharedValue.value = left;
        sharedValue.value = withRepeat(withTiming(right, config), -1, false);
      });
    }
  }, [aref.current]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: sharedValue.value }],
  }));

  return (
    <View
      style={[{ overflow: "hidden", backgroundColor: colors.primary }, style]}
      ref={aref}
    >
      <Animated.View
        style={[
          {
            height: "100%",
            width: lineWidth,
            backgroundColor: colors.secondary,
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

export default Skeleton;
