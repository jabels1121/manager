import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet, TouchableOpacity} from 'react-native';

class Header extends Component {
    renderHeader(){
        const {headerText} = this.props;
        switch (Platform.OS) {
            case 'android':
                return(
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>{headerText}</Text>
                    </View>
                );
            case 'ios':
                return(
                    <View style={styles.iosViewTest}>
                        <TouchableOpacity style={styles.iosBackButtonTest}>
                            <Text style={{color: '#2257ff'}}>Back</Text>
                        </TouchableOpacity>
                        <Text style={styles.iosTextTest}>{headerText}</Text>
                    </View>
                );
        }
    }
    render(){
        return(
            this.renderHeader()
        )
    };
}

const styles = StyleSheet.create({
    viewStyle: Platform.select({
        ios: {
            height: 60,
            borderBottomWidth: 1.5,
            borderColor: '#c3c3c3',
            shadowRadius: 1,
            shadowOpacity: 2,
            shadowOffset: {height: 1.5, widget: 2},
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
        },
        android: {
            height: 60,
            borderBottomWidth: 1.5,
            borderColor: '#c3c3c3',
            elevation: 2,
            backgroundColor: '#2e2f34',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '2%',
            marginBottom: 10
        }
    }),
    textStyle: Platform.select({
        ios: {
            fontSize: 22.5,
            color: '#2257ff',
            fontWeight: 'bold'
        },
        android: {
            fontSize: 22.5,
            color: '#ffffff'
        }
    }),
    iosViewTest: {
        height: 60,
        borderBottomWidth: 1.5,
        borderColor: '#c3c3c3',
        shadowRadius: 1,
        shadowOpacity: 2,
        shadowOffset: {height: 1.5, widget: 2},
        backgroundColor: '#fff',
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    iosTextTest: {
        flex: 3,
        fontSize: 22.5,
        color: '#2257ff',
        alignSelf: 'center'
    },
    iosBackButtonTest: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '2%'
    }
});

export {Header};