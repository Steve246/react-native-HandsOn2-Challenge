const { useNavigation, useRoute } = require("@react-navigation/native");
const { useEffect } = require("react");
import { TouchableOpacity } from "react-native-gesture-handler";
import MainContainer from "../../shared/components/MainContainer";

const Menu1 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.message) {
      console.log("Menu1", route.params.message);
    }
  }, [route.params]);
  return (
    <MainContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE.PIN, {});
        }}
      ></TouchableOpacity>
    </MainContainer>
  );
};

export default Menu1;
