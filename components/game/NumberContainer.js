import { StyleSheet, View , Text} from "react-native";
import colors from "../../constants/Colors";


export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.numText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        borderWidth :4,
        borderColor : colors.secondary500,
        padding: 20,
        margin :24,
        borderRadius:8,
        alignItems :'center',
        justifyContent :'center'
    },

    numText :{
        color :colors.secondary500,
        fontSize: 36,
        fontWeight :'bold'
    }
})