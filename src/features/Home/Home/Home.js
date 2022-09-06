import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import ModalDialog from "../../../shared/components/ModalDialog";
import AppBackground from "../../../shared/components/AppBackground";
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel";
import MainContainer from "../../../shared/components/MainContainer";
import { FontAwesome } from "@expo/vector-icons";
import PromoView from "./components/PromoView";
import MenuView from "./components/MenuView";
import { useTheme } from "../../../shared/context/ThemeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../../../shared/constants";

const MainPage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const navigation = useNavigation();
  const route = useRoute();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (route.params?.message) {
      console.log(route.params?.message);
    }
  }, [route.params?.message]);

  return (
    <MainContainer>
      <AppBackground>
        <HeaderPageLabel text="WMB" avatarImg="https://picsum.photos/200/300" />
        {modalVisible && <ModalDialog onVisible={setModalVisible} />}
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => setModalVisible(true)}
              >
                <FontAwesome
                  name="sticky-note-o"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.textMenu}>Add{"\n"}Order</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {}}
              >
                <FontAwesome
                  name="user-plus"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.textMenu}>Customer{"\n"}Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  navigation.navigate(ROUTE.PIN, {
                    userId: 123,
                    prevPage: route.name,
                  });
                }}
              >
                <FontAwesome
                  name="money"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.textMenu}>Bill{"\n"}Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
          <HeaderPageLabel text="Promo" />
          <View>
            <PromoView />
          </View>
          <HeaderPageLabel text="Menu" />
          <View style={{ flex: 1, marginHorizontal: theme.spacing.m }}>
            <MenuView />
          </View>
          <View>
            <HeaderPageLabel text="Tables" />
            <Text>Coming Soon</Text>
          </View>
          <View>
            <HeaderPageLabel text="Administration" />
            <Text>Coming Soon</Text>
          </View>
          <View>
            <HeaderPageLabel text="Operational Setting" />
            <TouchableOpacity
              onPress={() => {
                navigation.replace(ROUTE.LOGIN);
              }}
            >
              <Text>Logout</Text>
              {/* taro text disini */}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </AppBackground>
    </MainContainer>
  );
};
const styling = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      borderRadius: theme.radius.m,
    },
    menuContainer: {
      flex: 1,
      height: 64,
      justifyContent: "center",
    },
    textMenu: {
      textAlign: "center",
      fontSize: 12,
      color: theme.colors.foreground,
      fontFamily: "Poppins-Regular",
    },
  });

export default MainPage;
