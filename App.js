import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Messages from "./screens/Messages";
import { theme } from "./styles/theme";

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
      <Messages />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});
