import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for an Item</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Milk, Bread, Apples..."
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.resultText}>
        You typed: {query || "nothing yet"}
      </Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    color: "#333",
  },
});
