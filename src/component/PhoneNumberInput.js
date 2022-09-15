import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import TextInput from "rn-phone-number-val";
const PHONE_REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;


const PhoneNumberInput = () => {

    return (
        <TextInput />
    );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    text: {
        margin: 5,

    }
});
