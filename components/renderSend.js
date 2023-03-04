import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Send } from "react-native-gifted-chat";
import { theme } from "../styles/theme";

export const renderSend = (props) => {
  return (
    <>
      {props.text && <Send {...props} containerStyle={{}}></Send>}
      {!props.text && (
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={30}
            color="white"
            style={{ marginRight: theme.spacing.small }}
          />

          <AntDesign
            name="picture"
            size={30}
            color="white"
            style={{ marginRight: theme.spacing.small }}
          />
          <Feather
            name="plus-circle"
            size={30}
            color="white"
            style={{ marginRight: theme.spacing.small }}
          />
        </View>
      )}
    </>
  );
};
