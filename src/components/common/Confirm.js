import React from 'react';
import {Modal, Text, View} from 'react-native';
import {Button, CardSection} from "../common";

const ModalPoPup = ({children, onAccept, onDecline, visible}) => {
    const {containerModalStyle, workSpace, textContainerStyle, buttonContainerStyle, textStyle} = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => {
            }}
        >
            <View style={containerModalStyle}>
                <View style={workSpace}>
                    <View style={textContainerStyle}>
                        <Text style={textStyle}>{children}</Text>
                    </View>
                    <View style={buttonContainerStyle}>
                        <CardSection style={{borderBottomWidth: 0}}>
                            <Button onPress={onAccept}>Yes</Button>
                        </CardSection>
                        <CardSection style={{borderBottomWidth: 0}}>
                            <Button onPress={onDecline}>No</Button>
                        </CardSection>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    containerModalStyle: {
        backgroundColor: 'rgba(0,0,0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    workSpace: {
        width: '75%',
        height: '80%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        elevation: 5
    },
    textContainerStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 24,
        color: '#000',
        fontWeight: '600',
        lineHeight: 40,
        marginRight: '10%',
        marginLeft: '10%',
        textAlign: 'center'
    },
    buttonContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    }
};

export {ModalPoPup};