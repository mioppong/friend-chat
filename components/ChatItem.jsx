import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../styles/theme";
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
  console.log(item);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(
    "https://pbs.twimg.com/profile_images/1571339659392720896/bK5vQazY_400x400.jpg"
  );

  const [unread, setUnread] = useState(false);
  const navigateToChat = () => {
    navigation.navigate("Chat2");
  };
  return (
    <TouchableOpacity onPress={navigateToChat}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#CA1D7E", "#E35157", "#F2703F"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            height: 71,
            width: 71,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 82 / 2,
          }}
        >
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
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </LinearGradient>
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
    color: theme.colors.textColor,
  },
});
