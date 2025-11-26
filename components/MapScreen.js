import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store Map</Text>

      <View style={styles.mapBox}>
        <Text>Map goes here (aisles, route, etc.)</Text>
      </View>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  mapBox: {
    flex: 1,
    backgroundColor: "#d1d5db",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
