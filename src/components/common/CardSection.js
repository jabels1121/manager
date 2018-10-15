import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

const CardSection = ({ children }) => {
    return(
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: Platform.select({
        ios: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        },
        android: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative',
            justifyContent: 'center',
        }

    })
});

export { CardSection };