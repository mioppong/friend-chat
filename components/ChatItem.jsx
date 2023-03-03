import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
    "https://scontent-ord5-1.cdninstagram.com/v/t51.2885-19/326041774_146436528214449_2052006328459241842_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ord5-1.cdninstagram.com&_nc_cat=109&_nc_ohc=LrSu0_rcwCgAX-mmBG0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBAxj2WkuiBeI7octGszzp25_bzQ0gm82K2_PK5ehEiSA&oe=640623DD&_nc_sid=8fd12b"
  );
  const [unread, setUnread] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: theme.spacing.small }}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.messageStyle}>
          {messages[messages.length - 1]?.message} . {"6h"}
        </Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: theme.colors.black,
    marginVertical: theme.spacing.small,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
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
