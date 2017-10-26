import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const {cardsectionStyle} = style;

    return(
        <View style={cardsectionStyle}>
            {props.children}
        </View>
    );
};

const style = {
    cardsectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#FFF",
        borderColor: "#ddd",
        justifyContent: "flex-start",
        flexDirection: 'row',
        position: 'relative',
    }
}

export default CardSection;