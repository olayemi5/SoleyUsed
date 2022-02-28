import { StyleSheet, View, Text} from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.tilte}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height: 80,
        paddingTop : 38,
        backgroundColor: 'coral'
    },
    tilte: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default Header