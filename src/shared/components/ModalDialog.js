import {Button, Modal, StyleSheet, Text, View} from "react-native";

const ModalDialog = ({visible = true, onVisible}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                visible={visible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    onVisible(!visible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize: 30}}>This is a modal!</Text>
                        <Button onPress={() => onVisible(!visible)} title="Dismiss"/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        alignSelf: 'stretch',
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowRadius: 10,
        elevation: 5,
    },
});

export default ModalDialog;