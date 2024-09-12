import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: 'brown' }]}>
                caixa1
            </View>
            <View style={[styles.box, { backgroundColor: 'burlywood' }]}>
                caixa2
            </View>
            <View style={[styles.box, { backgroundColor: 'cadetblue' }]}>
                caixa3
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        flex: 1
    },
});

export default Exercicio4