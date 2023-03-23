import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat, Message } from "react-native-gifted-chat";
import TypingIndicator from "react-native-gifted-chat/lib/TypingIndicator";

import ChatHeader from "../components/ChatHeader";
import { renderActions } from "../components/renderActions";
import { renderBubble } from "../components/renderBubble";
import { renderComposer } from "../components/renderComposer";
import { renderInputToolbar } from "../components/renderInputToolBar";
import { renderSend } from "../components/renderSend";
import { theme } from "../styles/theme";
import { removeNewLine } from "../util";
const API = "https://server-dot-friend-chat-3033a.uc.r.appspot.com";
const ChatScreen2 = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);

  const createPrompt = (messages) => {
    let prompt = "";

    messages.reverse().forEach((message) => {
      if (message.user._id === 1) {
        prompt += `You: ${message.text}\nBot: `;
      } else {
        prompt += `${message.text}\n`;
      }
    });
    return prompt;
  };

  const renderMessage = (props) => {
    return (
      <Message
        {...props}
        linkStyle={{
          right: {
            color: theme.colors.blue,
          },
          left: {
            color: theme.colors.blue,
          },
        }}
      />
    );
  };
  const onSend = async (messages = []) => {
    const combinedMessages = GiftedChat.append(allMessages, messages);
    setAllMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    setLoading(true);

    combinedMessages.forEach((message, index) => {
      console.log(index, message.text);
    });
    const prompt = createPrompt(combinedMessages);

    try {
      const res = await axios.post(`${API}/api/openai`, {
        prompt: prompt,
      });

      console.log("response", res.data.data);

      // if a message includes a \n remove it
      const newMessage = removeNewLine(res.data.data);
      console.log("newMessage", JSON.stringify(newMessage));

      setAllMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random(),
            text: removeNewLine(JSON.stringify(res.data.data)),
            createdAt: new Date(),
            image: "https://placeimg.com/140/140/any",
            user: {
              _id: 2,
              avatar: "https://placeimg.com/140/140/any",
            },
          },
        ])
      );
    } catch (error) {
      console.log("full");
    }

    setLoading(false);
  };
  const typingIndicatorProps = {
    backgroundColor: "blue",
  };
  const renderTypingIndicator = () => (
    <TypingIndicator
      style={{ backgroundColor: "blue", color: "blue" }}
      dotStyle={{ backgroundColor: "white" }}
      isTyping={true}
    />
  );
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.black }}>
      <ChatHeader />
      <GiftedChat
        renderMessageImage={() => null}
        renderTime={() => null}
        messages={allMessages}
        isTyping={loading}
        // renderLoading={() => (
        //   <TypingIndicator
        //     isTyping={true}
        //     style={{ backgroundColor: theme.colors.red }}
        //     containerStyle={{ backgroundColor: theme.colors.red }}
        //   />
        //   // <View style={{ backgroundColor: theme.colors.red }} />
        // )}
        renderFooter={renderTypingIndicator}
        placeholder="Message..."
        renderComposer={renderComposer}
        messagesContainerStyle={{
          backgroundColor: theme.colors.black,
        }}
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        renderMessage={renderMessage}
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
