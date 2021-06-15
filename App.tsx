import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import Tabs from "./navigation/tabs";
import { AboutUs, BlogScreen, CoinDetailScreen, Disclaimer, PrivacyPolicy, Webview } from "./screens";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"MainLayout"}
        >
          <Stack.Screen name="MainLayout" component={Tabs} />
          <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
          <Stack.Screen name="BlogScreen" component={BlogScreen} />
          <Stack.Screen name="Webview" component={Webview} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: true }} />
          <Stack.Screen name="Disclaimer" component={Disclaimer} options={{ headerShown: true }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
