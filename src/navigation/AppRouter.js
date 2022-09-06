import LoginPage from "../features/Login/LoginPage";
import { ROUTE } from "../shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import HomePage from "../features/Home/HomePage";
import PinPage from "../features/Pin/PinPage";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../shared/context/ThemeContext";
import { useAuth } from "../shared/hook/UseAuth";
import { useEffect, useState } from "react";

import Home from "../features/Home/Home/Home.js";
import PageA from "../features/Home/Home/PageA/PageA";
import MainPage from "../features/Home/Home/Home.js";
import { View } from "react-native";

const Stack = createStackNavigator();
const AppRouter = () => {
  const { isTokenExist } = useAuth();
  const [initialRoute, setInitialRoute] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const onValidToken = async () => {
      try {
        const resp = await isTokenExist();
        if (resp) {
          setInitialRoute(ROUTE.HOME);
        } else {
          setInitialRoute(ROUTE.WELCOME);
        }
      } catch (e) {
        setInitialRoute(ROUTE.WELCOME);
      }
    };
    onValidToken();
  }, []);

  return initialRoute !== null ? (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} />
        <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} />
        <Stack.Screen name={ROUTE.HOME} component={MainPage} />
        <Stack.Screen name={ROUTE.MAIN} component={HomePage} />
      </Stack.Group>

      <Stack.Screen
        name={ROUTE.PIN}
        component={PinPage}
        options={{
          headerTitle: "",
          headerBackImage: () => (
            <FontAwesome
              size={24}
              name={"chevron-left"}
              color={theme.colors.foreground}
            />
          ),
        }}
      />
    </Stack.Navigator>
  ) : (
    <View> </View>
  );
};

export default AppRouter;
