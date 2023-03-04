import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export const ChatHeader = (props) => {
  return (
    <View style={styles.header}>
      <Entypo name="chevron-thin-left" size={24} color="white" />
      <Image
        source={{ uri: "https://placeimg.com/140/140/any" }}
        style={{
          height: 50,
          width: 50,
          borderRadius: 100,
          marginLeft: theme.spacing.medium,
        }}
      />
      <View style={{ flex: 1, marginLeft: theme.spacing.medium }}>
        <Text
          style={{
            color: "white",
            fontFamily: theme.fonts.bold,
            fontSize: theme.fontSizes.large2,
          }}
        >
          Oppong
        </Text>
        <Text style={{ color: theme.colors.medGrey }}>its_oppong</Text>
      </View>
      <Ionicons
        name="call-outline"
        size={25}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <Ionicons
        name="videocam-outline"
        size={30}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <Ionicons
        name="flag-outline"
        size={25}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.medGrey,
    padding: theme.spacing.small,
  },
});
