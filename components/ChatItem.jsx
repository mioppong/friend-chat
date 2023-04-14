import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../styles/theme";
import VerifiedIcon from "./icons/VerifiedIcon";
const ChatItem = (props) => {
  const { item } = props;
  const [name, setName] = useState(item.name);
  const navigation = useNavigation();
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
  const navigateToChat = () => {
    navigation.navigate("Chat2", { userData: item });
  };
  return (
    <TouchableOpacity onPress={navigateToChat}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "black",
            padding: 1,
            height: 65,
            width: 65,
            borderRadius: 1000,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>

        <View style={{ flex: 1, marginLeft: theme.spacing.medium }}>
          <Text style={styles.nameStyle}>
            {name} <VerifiedIcon size={7} />
          </Text>
          <Text style={styles.messageStyle}>
            {messages[messages.length - 1]?.message} {"6h"}
          </Text>
        </View>

        <Feather name="camera" size={24} color={theme.colors.medGrey} />
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    backgroundColor: theme.colors.black,
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 1000,
    margin: 10,
    padding: 10,
  },
  nameStyle: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.bold,
    color: theme.colors.textColor,
  },
  messageStyle: {
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.bold,
    color: theme.colors.medGrey,
  },
});
