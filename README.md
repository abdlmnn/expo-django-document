## Documentation: Setting Up React Native Expo and Django

This documentation covers the installation and setup of **React Native Expo and Django**. It serves as a record of my learning journey with these two stacks, including all the fundamental concepts and configurations I’ve explored.

## Documentation: Expo, React Native, Django and Django API REST FRAMEWORK:

- [Expo](https://docs.expo.dev/get-started/introduction/)

- [React Native](https://reactnative.dev/docs/environment-setup)

- [Django](https://docs.djangoproject.com/en/5.2/)

- [Django API REST FRAMEWORK](https://www.django-rest-framework.org/)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en) (for React Native & Expo)

- [Python](https://www.python.org/downloads/) (for Django)

- [pip](https://pip.pypa.io/en/stable/) (Python package manager)

- [Git](https://git-scm.com/)

--

## React Native Expo Setup

Install Expo

```bash
   npx create-expo-app nameofyour-app
```

If you want latest Expo

```bash
   npx create-expo-app@latest nameofyour-app
```

Go change directory to your name of the app

```bash
   cd nameofyour-app
```

Run the App

```bash
   npx expo start
```

After run the app, just incase if you receive this warning:

```bash
   The following packages should be updated for best compatibility with the installed expo version: react-native@0.79.6 - expected version: 0.79.5 Your project may not work correctly until you install the expected versions of the packages.
```

This ensures Expo installs the exact version it expects.

```bash
   npm expo install react-native
```

When you're ready, run.

```bash
   npm run reset-project
```

Enter Y

```bash
   Y
```

## Install Expo Go Mobile

Take Note: Make sure run the app **npx expo start**, then proceed to this steps.

## Android:

1. Open Play Store
2. Search Expo Go
3. Install Expo Go
4. Scan QR code or Enter URL Manually

## IOS:

1. Open App Store
2. Search Expo Go
3. Install Expo Go
4. Scan QR code or Enter URL Manually

--

## SafeAreaView

is a container that keeps your content inside the visible screen area, avoiding notches, status bars, and home indicators.

```tsx
import { SafeAreaView } from "react-native";

export default function index() {
  return <SafeAreaView></SafeAreaView>;
}
```

## StatusBar

lets you control the appearance of the phone’s status bar.

```tsx
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
```

## View

is the basic container (div) in React Native used to layout and style UI elements.

```tsx
import { SafeAreaView, View } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
}
```

## StyleSheet & Inline Style

is for reusable, organized styles, while inline style is for quick, one-off styling directly on a component.

```tsx
import { SafeAreaView, View, StyleSheet } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "blue", height: 100, width: 100 }}></View>

      <View style={styles.boxContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
});
```

## Text

used to display text on the screen.

```tsx
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello Abdulmanan!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
```

## ScrollView

allows content to scroll vertically or horizontally when it overflows the screen.

```tsx
import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollHeigth}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          alias omnis aliquid sunt tempora necessitatibus rerum dignissimos
          tenetur veniam ex, veritatis unde, nihil porro earum voluptate harum
          pariatur mollitia hic?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollHeigth: {
    heigth: 1600,
  },
});
```

## Input

user text input, like forms or search bars.

```tsx
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <TextInput
        defaultValue=""
        onChangeText={(value) => console.log(value)}
        placeHolder="Type here"
        style={styles.textInput}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 5,
  },
});
```

# Button

a clickable button for user interactions.

```tsx
import { SafeAreaView, Button } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <Button title="Click Me" onPress={() => console.log("You Clicked Me")} />
    </SafeAreaView>
  );
}
```

## TouchableOpacity

any element touchable/clickable and provides a fade (opacity) effect when pressed.

```tsx
import { SafeAreaView, Button, Text } from "react-native";

export default function index() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => console.log("Decrease Opacity")}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
```

## useState

is a React (and React Native) hook that lets a component store and update state.

```tsx
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

export default function index() {
  const [text, setText] = useState("");

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <TextInput
        defaultValue=""
        onChangeText={(value) => setText(value)}
        placeHolder="Type here"
        style={styles.textInput}
      />

      <Text style={{ fontSize: 16 }}>{count}</Text>

      <Button title="Increment" onPress={() => setCount(count + 1)} />

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={{
          backgroundColor: "grey",
          padding: 10,
          alignItems: "center",
          width: 150,
        }}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 5,
  },
});
```
