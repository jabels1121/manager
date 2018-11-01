import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({ onPress, children, style }) => {
    const { textStyle, androidButtonStyle } = styles;
    return(
        <TouchableOpacity
            onPress={onPress}
            style={[androidButtonStyle, style]}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '700'
    },
    androidButtonStyle: {
        height: 40,
        backgroundColor: '#d3d3d3',
        borderWidth: 1.5,
        borderColor: '#dbdbdb',
        elevation: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Button };