import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import ModalDialog from "../../../../shared/components/ModalDialog";
import AppBackground from "../../../../shared/components/AppBackground";
import { useAuth } from "../../../../shared/hook/UseAuth";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../../../shared/constants";
import HeaderPageLabel from "../../../../shared/components/HeaderPageLabel";

const PageA = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { onLogout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const resp = await onLogout();
      if (resp) {
        navigation.replace(ROUTE.LOGIN);
      }
    } catch (e) {}
  };
  return (
    <AppBackground>
      <SafeAreaView>
        <HeaderPageLabel
          text="Page A"
          avatarImg="https://picsum.photos/200/300"
        />
        <ModalDialog visible={modalVisible} onVisible={setModalVisible} />
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show Modal</Text>
        </Pressable>
        <Pressable onPress={handleLogout}>
          <Text>Logout</Text>
        </Pressable>
      </SafeAreaView>
    </AppBackground>
  );
};

export default PageA;
