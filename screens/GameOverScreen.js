import { Image, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import colors from "../constants/Colors"

export default function GameOverScreen({roundsNumber , userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.overContainer}>
                <Image source={require('../assets/Images/over.jpg')} style={styles.over} />
            </View>

            <Text style={styles.text}>
                Your phone needed <Text style={styles.summaryText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.summaryText}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>

        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.secondary500,
        overflow: 'hidden',
        margin: 36
    },
    over: {
        width: '100%',
        height: '100%',
    },
    text :{
        fontSize: 24,
        textAlign:'center',
        marginBottom :24
    },
    summaryText : {
        color : colors.primary500,
    }
})
