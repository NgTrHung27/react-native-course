import { useAuth } from "@/lib/auth-context";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.view}>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        {" "}
        Sign Out
      </Button>
      <Link href="/login" style={styles.navButton}>
        {" "}
        1st Push Navigate - Login Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
  navButton: {
    width: 200,
    height: 50,
    backgroundColor: "coral",
    borderRadius: 8,
    textAlign: "center",
  },
});
