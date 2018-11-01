import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Image} from 'react-native';
import {createButtonPressed} from '../actions/index';

class NavBarCreateEmployeeButton extends Component {

    onButtonPress(){
        this.props.createButtonPressed();
    }

    render(){
        return(
            <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
            >
                <Image
                    source={require('./common/buttonImages/plus_button.png')}
                    style={styles.rightButtonIconStyle}
                />
            </TouchableOpacity>
        );
    }
}

const styles = {
    rightButtonIconStyle: {
        width: 30,
        height: 30,
        marginRight: 15
    }
};

export default connect(null, {createButtonPressed})(NavBarCreateEmployeeButton);