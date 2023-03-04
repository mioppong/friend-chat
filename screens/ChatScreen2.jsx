import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import ChatHeader from "../components/ChatHeader";
import { renderActions } from "../components/renderActions";
import { renderBubble } from "../components/renderBubble";
import { renderComposer } from "../components/renderComposer";
import { renderInputToolbar } from "../components/renderInputToolBar";
import { renderSend } from "../components/renderSend";
import { theme } from "../styles/theme";
import { fakeMessages } from "../util/constants";
const ChatScreen2 = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState(null);

  useEffect(() => {
    setMessages(fakeMessages);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.black }}>
      <ChatHeader />
      <GiftedChat
        renderTime={() => null}
        messages={messages}
        placeholder="Message..."
        renderComposer={renderComposer}
        messagesContainerStyle={{
          backgroundColor: theme.colors.black,
        }}
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        renderActions={renderActions}
        renderSend={renderSend}
        onInputTextChanged={(text) => {
          setText(text);
        }}
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.medGrey,
    padding: theme.spacing.small,
  },
});
