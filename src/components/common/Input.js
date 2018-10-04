import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, value, onChangeText,placeHolder,secure }) => {
    return (
        <View style={styles.containerStyle}>

            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder = {placeHolder}
                autoCorrect={false}
                style={styles.textInputStyle}
                value={value}
                secureTextEntry={secure}
                onChangeText={onChangeText}>
            </TextInput>
        </View>);
}


const styles = {
    textInputStyle: {
        //  width: 100,
        height: 40,
        //justifyContent:'center',
        lineHeight: 23,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2
    },
    containerStyle: {
        flex: 1,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    labelStyle: {
        flex: 1,
        marginLeft: 5,
        fontSize: 18
    }

}


export { Input };