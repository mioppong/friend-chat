import React from "react";
import { Bubble } from "react-native-gifted-chat";
import { theme } from "../styles/theme";

export const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          color: "white",
          fontFamily: theme.fonts.regular,
        },
        left: {
          color: "white",
          fontFamily: theme.fonts.regular,
        },
      }}
      wrapperStyle={{
        right: {
          // borderTopLeftRadius: 15,
          backgroundColor: theme.colors.purpleBlue,
          padding: theme.spacing.small,
          borderRadius: 24,
        },
        left: {
          // borderTopLeftRadius: 15,
          backgroundColor: theme.colors.darkGrey,
          padding: theme.spacing.small,
          borderRadius: 24,
        },
      }}
    />
  );
};
