import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "../../../../shared/context/ThemeContext";

const PromoItem = ({promo}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity>
            <View style={styles.promoContainer}>
                <View style={{width: '50%', flexDirection: 'row'}}>
                    <Text style={styles.textPromo}>{promo.promo}</Text>
                </View>
                <FontAwesome name="check-circle-o" size={16} color={theme.colors.primary}/>
            </View>
        </TouchableOpacity>
    )
}
const styling = (theme) => StyleSheet.create({
    promoContainer: {
        borderColor: theme.colors.foreground,
        borderWidth: 1,
        margin: theme.spacing.s,
        width: 180,
        height: 60,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPromo: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 12,
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },
})
export default PromoItem