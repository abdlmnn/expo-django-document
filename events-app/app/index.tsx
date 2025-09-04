import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.pinkContainer}>
      <ScrollView>
        <View style={{ height: 1600 }}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            alias omnis aliquid sunt tempora necessitatibus rerum dignissimos
            tenetur veniam ex, veritatis unde, nihil porro earum voluptate harum
            pariatur mollitia hic?
          </Text>

          <TextInput
            defaultValue=""
            onChangeText={(e) => console.log(e)}
            style={{ borderWidth: 1, padding: 5 }}
          />

          <Button
            title="Press Me"
            onPress={() => Alert.alert("Button pressed!")}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "grey",
              padding: 10,
              alignItems: "center",
              width: 150,
            }}
            onPress={() => console.log("wow")}
          >
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pinkContainer: {
    backgroundColor: "pink",
    padding: 5,
  },
});
