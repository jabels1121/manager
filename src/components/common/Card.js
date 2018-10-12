import React from 'react';
import {View} from 'react-native';

const Card = ({children}) => {
    return(
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
}
const styles = {
    containerStyle: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffSet: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };