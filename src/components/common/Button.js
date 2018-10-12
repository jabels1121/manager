import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({ onPress, children }) => {
    const { textStyle, androidButtonStyle, iosButtonStyle } = styles;
    return(
        <TouchableOpacity
            onPress={onPress}
            style={androidButtonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#404040',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    iosButtonStyle: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,                //This is iOS button styling
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    androidButtonStyle: {
        height: 40,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#e6e6e6',
        borderWidth: 1.5,
        borderColor: '#e3e3e3',
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
    }
};

export { Button };