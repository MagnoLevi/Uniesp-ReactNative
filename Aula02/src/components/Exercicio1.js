import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio1 = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: 'brown' }]}>caixa 1</View>
            <View style={[styles.box, { backgroundColor: 'burlywood' }]}>caixa 2</View>
            <View style={[styles.box, { backgroundColor: 'cadetblue' }]}>caixa 3</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        height: '100px',
        width: '100%'
    }
});

export default Exercicio1