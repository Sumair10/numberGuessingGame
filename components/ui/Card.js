import { View, StyleSheet } from "react-native"
import colors from "../../constants/Colors";

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
   
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: colors.primary800,
        borderRadius: 8,
        elevation: 4
    },
   
});

