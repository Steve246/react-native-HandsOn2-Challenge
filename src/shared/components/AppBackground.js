import {ImageBackground, StyleSheet} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const AppBackground = ({children, style}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <ImageBackground source={theme.background} resizeMode="cover"
                         style={[styles.container, style]}>
            {children}
        </ImageBackground>
    );
};

const styling = (theme) => StyleSheet.create({
    container: {
        padding: theme.spacing.m,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    }
});
export default AppBackground;