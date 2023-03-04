import React from "react";
import { InputToolbar } from "react-native-gifted-chat";
import { theme } from "../styles/theme";

export const renderInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      primaryStyle={{ alignItems: "center" }}
      containerStyle={{
        backgroundColor: theme.colors.darkGrey,
        borderTopWidth: 0,
        height: 50,
        borderRadius: 30,

        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};
