import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio3 = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.boxOut, { backgroundColor: 'brown' }]}>
                caixa1
            </View>
            <View style={[styles.box, styles.boxCenter, { backgroundColor: 'burlywood' }]}>
                caixa2
            </View>
            <View style={[styles.box, styles.boxOut, { backgroundColor: 'cadetblue' }]}>
                caixa3
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        height: '50px'
    },
    boxOut: {
        width: '50px'
    },
    boxCenter: {
        flex: 1
    },
});

export default Exercicio3