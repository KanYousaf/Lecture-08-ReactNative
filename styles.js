import { StyleSheet, StatusBar } from "react-native";

const mainAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  listContent: {
    padding: 16,
  },
  item: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  setupText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  punchlineText: {
    fontSize: 16,
  },
});
export { mainAppStyles };
