import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "dodgerblue",
  },
  title: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const listItemStyles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
});

export { headerStyles, listItemStyles };
