import { Chat } from "@flyerhq/react-native-chat-ui";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "x" ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const ChatScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const user = { id: "06c33e8b-e835-4736-80f4-63f44b66666c" };
  const user2 = { id: "06c33e8b-e835-4736-80f4-63f44b6666d" };

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = (message) => {
    const textMessage = {
      author: message.text === "Hello" ? user2 : user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    };
    addMessage(textMessage);
  };

  return (
    // Remove this provider if already registered elsewhere
    // or you have React Navigation set up
    <SafeAreaProvider>
      <Chat
        inputProps={{
          placeholder: "Type a message",
          placeholderTextColor: "grey",
        }}
        textInputProps={{
          multiline: true,
          numberOfLines: 5,
        }}
        renderCustomMessage={(message) => {
          return (
            <View
              style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10,
                maxWidth: "80%",
              }}
            >
              <Text style={{ color: "white" }}>{message.text}</Text>
            </View>
          );
        }}
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        timeFormat={null}
        flatListProps={{
          ListFooterComponent: () => <View style={{ height: 400 }} />,
        }}
        customDateHeaderText={(date) => {
          return "Today";
        }}
      />
    </SafeAreaProvider>
  );
};

export default ChatScreen;
