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
// const API = "https://server-dot-friend-chat-3033a.uc.r.appspot.com";
const API = "http://localhost:2000";
const ChatScreen2 = (props) => {
  console.log(props.route.params.userData);
  const userData = props.route.params.userData;
  const systemMessage = {
    role: "system",
    content: userData.context,
  };
  const [allMessages, setAllMessages] = useState([]);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);

  const createNewPrompt = (messages) => {
    let prompt = [systemMessage];
    messages.reverse().forEach((message) => {
      if (message.user._id === 1) {
        prompt.push({ role: "user", content: message.text });
      } else {
        prompt.push({ role: "assistant", content: message.text });
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
    const prompt = createNewPrompt(combinedMessages);
    console.log("prompt", prompt);

    try {
      const res = await axios.post(`${API}/api/openai`, {
        prompt: JSON.stringify(prompt),
      });

      setAllMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random(),
            text: removeNewLine(JSON.stringify(res.data.data)),
            createdAt: new Date(),
            image: userData.image,
            user: {
              _id: 2,
              avatar: userData.image,
            },
          },
        ])
      );

      setLoading(false);
    } catch (error) {
      console.log("fukk");
    }

    setLoading(false);
  };

  const saveLastMessage = async (messages) => {
    try {
      const res = await axios.post(`${API}/api/messages`, {
        messages: messages,
      });
      console.log(res);
    } catch (error) {
      console.log("fukk");
    }
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
      <ChatHeader userData={userData} />
      <GiftedChat
        renderMessageImage={() => null}
        renderTime={() => null}
        messages={allMessages}
        isTyping={loading}
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
