import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../styles/theme";
const ChatItem = () => {
  const [name, setName] = useState("its_oppong");
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello",
    },
  ]);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(
    "https://pbs.twimg.com/profile_images/1571339659392720896/bK5vQazY_400x400.jpg"
  );
  const [unread, setUnread] = useState(false);

  return (
    <TouchableOpacity onPress={() => console.log("chat")}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ flex: 1, marginLeft: theme.spacing.medium }}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.messageStyle}>
            {messages[messages.length - 1]?.message} {"6h"}
          </Text>
        </View>
        <View
          style={{
            height: 8,
            width: 8,
            backgroundColor: theme.colors.blue,
            borderRadius: 100,
            marginRight: theme.spacing.medium,
          }}
        />
        <Feather name="camera" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: theme.colors.black,

    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 1000,
  },
  nameStyle: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.bold,
    color: theme.colors.textColor,
  },
  messageStyle: {
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.regular,
    color: theme.colors.medGrey,
  },
});
