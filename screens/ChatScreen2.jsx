import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { theme } from "../styles/theme";
const ChatScreen2 = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Follow @sobored.ca on ig",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 44353,
        text: "Follow @sobored.ca on ig okayy",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 4433353,
        text: "Follow @sobored.ca on ig okayy",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const renderBubble = (props) => {
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

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.black }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 0.2,
          borderBottomColor: theme.colors.medGrey,
          padding: theme.spacing.small,
        }}
      >
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
      <GiftedChat
        renderTime={() => null}
        messages={messages}
        placeholder="Message..."
        messagesContainerStyle={{
          backgroundColor: theme.colors.black,
        }}
        renderBubble={renderBubble}
        textInputProps={{
          multiline: true,
          numberOfLines: 5,
          borderRadius: 20,
        }}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen2;
