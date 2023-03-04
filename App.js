import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import ChatScreen from "./screens/ChatScreen";
import ChatScreen2 from "./screens/ChatScreen2";

import Messages from "./screens/Messages";
import { theme } from "./styles/theme";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "InstagramSans-Bold": require("./assets/font/InstagramSans-Bold.ttf"),
    "InstagramSans-Medium": require("./assets/font/InstagramSans-Medium.ttf"),
    "InstagramSans-Regular": require("./assets/font/InstagramSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Chat2" component={ChatScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});
