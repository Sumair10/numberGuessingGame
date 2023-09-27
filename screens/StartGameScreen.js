import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/Colors";

export default function StartGameScreen({ pickNumberHandler }) {

    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (input) => {
        setEnteredNumber(input)
    }

    const resetInput = () => {
        setEnteredNumber('')
    }

    const handleConfirm = () => {
        const choosedNumber = parseInt(enteredNumber)

        if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
            Alert.alert('Invalid Number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInput() }]
            )
            return

        }
        pickNumberHandler(choosedNumber)
        console.log('valid  number')

    }

    return (
        <KeyboardAvoidingView style={styles.screen}>

        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.textProperty}>Enter a Number</Text>
                <TextInput value={enteredNumber} onChangeText={numberInputHandler} style={styles.numberInput} maxLength={2} keyboardType='decimal-pad' autoCapitalize="none" autoCorrect={false} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonCon}>
                        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonCon}>
                        <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen :{
        flex :1
    },
    rootContainer: {
        flex: 1,
        marginTop: 100
    },
    numberInput: {
        height: 50,
        fontSize: 30,
        borderBottomColor: colors.secondary500,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    buttonCon: {
        flex: 1
    },
    textProperty: {
        color: colors.secondary500,
        fontSize: 24,
        // fontFamily :'open-sans'
    }
});

