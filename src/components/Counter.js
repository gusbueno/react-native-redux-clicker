import React from 'react';
import {Button, Text, View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HelloMessage from './HelloMessage';
import { onIncrement } from '../actions';

class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {numOfClicks: 0};
    // }
    //
    // onClick() {
    //     this.setState((prevState) => ({
    //         numOfClicks: prevState.numOfClicks + 1
    //     }));
    // }

    render() {
        return (
            <View>
                <HelloMessage name="Goku" />
                <HelloMessage name="Vegeta" />
                <Text>Number of clicks: {this.props.count}</Text>
                <Button onPress={this.props.onIncrement} title="Click me!"/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.clicker.count);
    return {
        count: state.clicker.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onIncrement }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
