import {StyleSheet, Text, View} from "react-native";
import {useTheme} from "../../../../shared/context/ThemeContext";

const Item = ({productName}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{productName}</Text>
        </View>
    )
}
const styling = (theme) => StyleSheet.create({
    item: {
        padding: theme.spacing.s,
        marginVertical: theme.spacing.xs,
        marginHorizontal: theme.spacing.s,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary
    },
    itemText: {
        fontSize: 14,
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    }
});

export default Item;