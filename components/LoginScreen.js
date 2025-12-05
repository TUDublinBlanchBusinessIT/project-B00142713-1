import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  }

  function handleLogin() {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, include a number and a special character."
      );
      return;
    }

    navigation.replace("MainTabs");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AisleFinder</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingRight: 10,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    paddingHorizontal: 4,
  },

  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
