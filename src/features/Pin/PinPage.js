import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import FormButton from "../../shared/components/FormButton";
import { useEffect, useState } from "react";
import { useTheme } from "../../shared/context/ThemeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import arrayShuffle from "array-shuffle";

const PinPage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const [pin, setPin] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const [pinParam, setPinParam] = useState({});

  const buttonList = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 0, number: 0 },
  ];

  useEffect(() => {
    console.log(pin);
  }, [pin]);

  useEffect(() => {
    if (route.params.prevPage) {
      setPinParam({
        prevPage: route.params.prevPage,
      });
    }
  }, [route.params]);

  const KeyboardList = ({ button }) => {
    const theme = useTheme();
    const styles = styling(theme);

    return (
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          buttonPressChange(button.number);
        }}
      >
        <View style={styles.circularMenu}>
          <Text style={styles.textMenu}>{button.number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const KeyboardView = () => {
    const renderItem = ({ item }) => {
      return <KeyboardList button={item} />;
    };
    const renderKeyboardViews = () => {
      const keyboardViews = [];
      for (let i = 0; i < buttonList.length / 3; i++) {
        const startIndex = i * 3;
        const endIndex = i * 3 + 3;
        const dataButtons = arrayShuffle(buttonList).slice(
          startIndex,
          endIndex
        );
        let contentStyle = { flex: 1, justifyContent: "space-between" };
        if (dataButtons.length % 3 !== 0) {
          contentStyle = { flex: 1 };
        }
        const m = (
          <FlatList
            key={i}
            horizontal
            data={dataButtons}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={contentStyle}
          />
        );
        keyboardViews.push(m);
      }
      return keyboardViews;
    };
    return <>{renderKeyboardViews()}</>;
  };

  const buttonPressDelete = () => {
    let newPin = pin;
    newPin = newPin.slice(0, -1);
    setPin(newPin);
  };

  const buttonPressChange = (input) => {
    if (pin.length < 6) {
      setPin(pin + input);
    } else {
      console.log("Full");
    }
  };

  return (
    <MainContainer>
      <View style={styles.pinView}>
        <View style={{ width: "50%" }}>
          <Text style={styles.pinLabel}>Please input PIN {"\n"}</Text>
          <TextInput
            secureTextEntry
            keyboardType="numeric"
            maxLength={6}
            style={styles.pinInput}
            value={pin}
            onChangeText={setPin}
          />
        </View>
      </View>
      <View>
        <KeyboardView />
        <TouchableOpacity
          onPress={buttonPressDelete}
          style={styles.circularMenu}
        >
          <Text>D</Text>
        </TouchableOpacity>
      </View>
      <FormButton
        label={"Submit"}
        onclick={() => {
          navigation.navigate(pinParam.prevPage, {
            message: "OK",
          });
        }}
      />
    </MainContainer>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    pinInput: {
      borderBottomColor: "rgb(252,80,40)",
      borderBottomWidth: 1,
      marginVertical: theme.spacing.l,
      fontSize: 32,
      textAlign: "center",
    },
    pinLabel: {
      textAlign: "center",
      fontFamily: "Poppins-Regular",
    },
    pinView: {
      alignItems: "center",
    },
    circularMenu: {
      width: 64,
      height: 64,
      borderColor: "grey",
      borderWidth: 2,
      borderRadius: 32,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing.s,
    },
    textMenu: {
      textAlign: "center",
      fontSize: 25,
      color: "black",
    },
  });

export default PinPage;
