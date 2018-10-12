import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ( { label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { labelStyle, textInputStyle, containerStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}
                autoCorrect={false}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelStyle:{
        fontSize: 18,
        flex: 1,
        paddingLeft: 20,
        color: '#000'
    },
    textInputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2
    }
};

export { Input }