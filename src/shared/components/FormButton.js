import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const FormButton = ({label, onClick, style = {}, Icon = null}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onClick}
        >
            {Icon}
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    );
};

const styling = (theme) => (StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.s,
        borderRadius: theme.radius.m,
        alignSelf: 'stretch',
        margin: theme.spacing.m,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textButton: {
        color: theme.colors.secondary,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
}));
export default FormButton;