import { View, Text, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";

export default function index() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
