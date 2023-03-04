import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Actions } from "react-native-gifted-chat";
import { theme } from "../styles/theme";

export const renderActions = (props) => {
  return (
    <Actions
      {...props}
      containerStyle={{ marginRight: theme.spacing.small }}
      icon={() => (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.blue,
            borderRadius: 100,

            height: 35,
            width: 35,
          }}
        >
          {props.text && <Ionicons name={"camera"} size={24} color="white" />}
          {!props.text && <Ionicons name={"search"} size={24} color="white" />}
        </View>
      )}
      optionTintColor="#222B45"
      onPressActionButton={() => null}
    />
  );
};
