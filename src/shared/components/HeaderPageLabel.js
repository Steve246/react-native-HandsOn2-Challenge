import React from 'react';
import {Text, View} from "react-native";
import {useTheme} from "../context/ThemeContext";
import Avatar from "./Avatar";

const HeaderPageLabel = ({text = '', avatarImg = ''}) => {
    const theme = useTheme();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: theme.spacing.s,
            marginBottom: theme.spacing.s,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
            alignItems: 'center',
            marginTop:theme.spacing.s
        }}>
            <Text style={[theme.text.subtitle, {fontWeight: 'bold'}]}>{text}</Text>
            {avatarImg && <Avatar imageUrl={avatarImg}/>}
        </View>
    );
};
export default HeaderPageLabel;
