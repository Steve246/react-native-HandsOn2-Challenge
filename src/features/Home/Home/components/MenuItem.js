import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "../../../../shared/context/ThemeContext";

const MenuItem = ({product}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity style={{alignItems: 'center'}}>
            <View style={styles.circularMenu}>
                <FontAwesome name={product.icon} size={32} color={theme.colors.foreground}/>
            </View>
            <Text>{product.menu}</Text>
        </TouchableOpacity>
    )
}
const styling = (theme) => StyleSheet.create({
    circularMenu: {
        width: 64,
        height: 64,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing.s,
    }
})
export default MenuItem