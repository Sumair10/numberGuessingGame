import { Text, View, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export default function PrimaryButton({onPress, children }) {
   
    return (
            <View style={styles.buttonOuterContainer}>
        <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color :colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer :{
        borderRadius: 28,
        margin:4,
        overflow :'hidden'
    },
    buttonInnerContainer :{
        backgroundColor :colors.primary500,
        paddingVertical:8,
        paddingHorizontal :16,
        elevation :2,
    },
    buttonText :{
        color:'white',
        textAlign:'center'
    }
})

