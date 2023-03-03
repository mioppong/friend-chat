import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ChatItem from "../components/ChatItem";
import CreateIcon from "../components/icons/CreateIcon";
import { theme } from "../styles/theme";

const Messages = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="chevron-back" size={30} color={theme.colors.white} />
          <Text style={styles.headerTitle}>its_oppong</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Ionicons
            size={40}
            color="white"
            name="md-videocam-outline"
            style={{ marginRight: 20 }}
          />
          <CreateIcon size={30} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="white" />
          <TextInput placeholder="Search" style={styles.textInputStyle} />
        </View>

        <FlatList
          data={arr}
          contentContainerStyle={{
            marginVertical: theme.spacing.large,
            backgroundColor: "blue",
          }}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 1000,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  margin: theme.spacing.small,
                }}
              >
                <Text>{item}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => {
            return <View style={{ width: 100 }} />;
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.messagesTitle}>Messages</Text>
          <Text style={styles.requestsTitle}>Requests</Text>
        </View>

        {arr.map((item, index) => {
          return <ChatItem key={index} />;
        })}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.red,
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.bold,
  },

  container: {
    backgroundColor: "red",
    padding: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  headerLeft: {
    flexDirection: "row",
    marginRight: "auto",
    alignItems: "center",
    backgroundColor: "blue",
  },
  headerRight: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
    backgroundColor: "green",
  },
  messagesTitle: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.bold,
    color: theme.colors.textColor,
  },
  requestsTitle: {
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.bold,
    color: theme.colors.medGrey,
  },
  searchContainer: {
    backgroundColor: theme.colors.darkGrey,
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: theme.spacing.small,
    marginTop: theme.spacing.medium,
  },
  textInputStyle: {
    marginLeft: 10,
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.regular,
    width: "100%",
  },
});
