import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import {NavigationContainer} from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import {serviceFactory} from "./src/services/ServiceFactory";
import {DependencyProvider} from "./src/shared/context/DependencyContext";

export default function App() {
    const fonts = useAppFont();
    const services = serviceFactory();
    if (!fonts) {
        return null;
    }
    return (
        <DependencyProvider services={services}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        <AppRouter/>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </DependencyProvider>
    );
}
