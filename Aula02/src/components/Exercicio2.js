import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>Caixa 1</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    box: {
        height: '50px',
        width: '50px',
        backgroundColor: 'burlywood'
    }
});

export default Exercicio2