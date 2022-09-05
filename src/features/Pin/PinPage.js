import { Text, TextInput, View, StyleSheet } from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import FormButton from "../../shared/components/FormButton";
import { useEffect, useState } from "react";
import { useTheme } from "../../shared/context/ThemeContext";

import ButtonNumber from "./components/ButtonNumber";
import RowButton from "./components/RowButton";

const PinPage = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const [pinParam, setPinParam] = useState({});
  // const [pin, setPin] = useState("");
  useEffect(() => {
    if (route.params?.userId && route.params?.prevPage) {
      setPinParam({
        userId: route.params.userId,
        prevPage: route.params.prevPage,
      });
    }
  }, [route.params]);

  // state untuk tombol calculator dibawah

  const [currVal, setCurrVal] = useState("");
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);

  // handleState untuk tombol dibawah

  const onHandleChange = (type, value) => {
    if (type === "number") {
      setCurrVal(`${currVal}${value}`);
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("0");
    }

    if (type === "clear") {
      setCurrVal("0");
      setOperator(null);
      setPrevVal(null);
    }
  };

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
            value={currVal}
            onChangeText={setCurrVal}
          >
            {/* {currVal} */}
          </TextInput>
        </View>
      </View>

      {/* ini tombol yang lama */}

      {/* <View style={{ flex: 1, marginHorizontal: theme.spacing.m }}>
        <NumberView />
      </View> */}

      {/* tombol yang baru dibawah */}

      <RowButton>
        <ButtonNumber text="7" onPress={() => onHandleChange("number", 7)} />
        <ButtonNumber text="8" onPress={() => onHandleChange("number", 8)} />
        <ButtonNumber text="9" onPress={() => onHandleChange("number", 9)} />
      </RowButton>

      <RowButton>
        <ButtonNumber text="4" onPress={() => onHandleChange("number", 4)} />
        <ButtonNumber text="5" onPress={() => onHandleChange("number", 5)} />
        <ButtonNumber text="6" onPress={() => onHandleChange("number", 6)} />
      </RowButton>

      <RowButton>
        <ButtonNumber text="1" onPress={() => onHandleChange("number", 1)} />
        <ButtonNumber text="2" onPress={() => onHandleChange("number", 2)} />
        <ButtonNumber text="3" onPress={() => onHandleChange("number", 3)} />
      </RowButton>

      <RowButton>
        <ButtonNumber text="0" onPress={() => onHandleChange("number", 0)} />
        <ButtonNumber
          text="C"
          theme="secondary"
          onPress={() => onHandleChange("clear")}
        />
      </RowButton>

      {/* untuk submit button dibawah  */}

      <FormButton
        onClick={() => {
          console.log(currVal);
          navigation.navigate(pinParam.prevPage, {
            message: "ok",
          });
        }}
        label={"Submit"}
      ></FormButton>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  value: {
    color: "rgb(252,80,40)",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default PinPage;
