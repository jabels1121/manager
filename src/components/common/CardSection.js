import React from 'react';
import {View} from 'react-native';

const CardSection = ({children, style}) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'center',
    }

};

export {CardSection};