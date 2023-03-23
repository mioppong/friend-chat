import React from "react";
import { Composer } from "react-native-gifted-chat";
import { theme } from "../styles/theme";

export const renderComposer = (props) => {
  return (
    <Composer
      {...props}
      textInputStyle={{
        color: "white",
        fontSize: theme.fontSizes.large,
        // fontFamily: theme.fonts.regular,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        alignSelf: "center",
        marginTop: "3%",
      }}
      textInputProps={{
        multiline: true,
        numberOfLines: 5,
      }}
      multiline={true}
      keyboardAppearance="dark"
    />
  );
};
