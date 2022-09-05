import { Text, TextInput, View } from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import FormButton from "../../shared/components/FormButton";
import { useEffect, useState } from "react";
import { useTheme } from "../../shared/context/ThemeContext";
import NumberView from "./components/NumberView";

const PinPage = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const [pinParam, setPinParam] = useState({});
  const [pin, setPin] = useState("");
  useEffect(() => {
    if (route.params?.userId && route.params?.prevPage) {
      setPinParam({
        userId: route.params.userId,
        prevPage: route.params.prevPage,
      });
    }
  }, [route.params]);

  return (
    <MainContainer>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "50%" }}>
          <Text
            style={[
              theme.text.subtitle,
              {
                textAlign: "center",
              },
            ]}
          >
            Please input PIN {"\n"} (User id : {pinParam.userId})
          </Text>
          <TextInput
            secureTextEntry
            style={{
              borderBottomColor: theme.colors.foreground,
              borderBottomWidth: 1,
              marginVertical: theme.spacing.l,
              fontSize: 32,
              textAlign: "center",
            }}
            value={pin}
            onChangeText={setPin}
          ></TextInput>
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: theme.spacing.m }}>
        <NumberView />
      </View>

      <FormButton
        onClick={() => {
          console.log(pin);
          navigation.navigate(pinParam.prevPage, {
            message: "ok",
          });
        }}
        label={"Submit"}
      ></FormButton>
    </MainContainer>
  );
};

export default PinPage;
