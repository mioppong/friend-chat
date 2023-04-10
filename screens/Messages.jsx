import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ChatItem from "../components/ChatItem";
import CreateIcon from "../components/icons/CreateIcon";
import { theme } from "../styles/theme";
import { fakeUsers } from "../util/constants";

const Messages = (props) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="chevron-back" size={35} color={theme.colors.white} />
          <Text style={styles.headerTitle}>Its_oppong</Text>
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
          />
        }
      >
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={theme.colors.medGrey} />
          <TextInput
            placeholder="Search"
            style={styles.textInputStyle}
            placeholderTextColor={theme.colors.medGrey}
          />
        </View>

        <FlatList
          data={fakeUsers}
          contentContainerStyle={{
            marginVertical: theme.spacing.large,
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    ...styles.badgeUser,
                    bottom: index % 2 == 0 ? 25 : null,
                  }}
                >
                  <Text style={styles.badgeUserMessage}>{item.message}</Text>
                </View>
                <Image
                  key={index}
                  source={{ uri: "https://picsum.photos/200/300" }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 1000,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    margin: theme.spacing.small,
                  }}
                />

                <Text
                  style={{
                    fontFamily: theme.fonts.regular,
                    color: theme.colors.textColor,
                  }}
                >
                  {item.name}
                </Text>
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

        {fakeUsers.map((item, index) => {
          return <ChatItem key={index} item={item} />;
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
  badgeUser: {
    backgroundColor: theme.colors.darkGrey,
    borderRadius: 50,
    padding: 5,
    position: "absolute",
    zIndex: 1,
  },
  badgeUserMessage: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.small,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.bold,
  },

  container: {
    padding: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  headerLeft: {
    flexDirection: "row",
    marginRight: "auto",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
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
    // fontFamily: theme.fonts.regular,
    width: "100%",
  },
});
