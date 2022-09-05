import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import {ROUTE} from "../../shared/constants";
import {useNavigation} from "@react-navigation/native";
import MainContainer from "../../shared/components/MainContainer";
import {useTheme} from "../../shared/context/ThemeContext";

const WelcomePage = () => {
    const navigation = useNavigation();
    const theme = useTheme()
    return (
        <MainContainer>
            <AppBackground style={{
                justifyContent: "space-evenly",
                alignItems: 'center'
            }}>
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/67221-food-market-app-interaction.json')}
                />
                <View style={styles.titleContainer}>
                    <TitleLabel text='POS System' titleStyle={theme.text.title}/>
                    <TitleLabel subTitle text='Simple Point Of Sales' titleStyle={theme.text.subtitle}/>
                </View>
                <FormButton label='Sign In' onClick={() => {
                    navigation.replace(ROUTE.LOGIN)
                }}></FormButton>
            </AppBackground>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: "center",
    },
});
export default WelcomePage;