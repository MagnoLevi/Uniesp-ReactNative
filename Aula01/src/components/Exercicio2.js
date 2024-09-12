import { Button, View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    } 

    return (
        <View style={styles.container}>
            <Button title='Incrementar' onPress={incrementar} />
            <Text>O valor está: {contador}</Text>
            <Button title='Decrementar' onPress={decrementar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px'
    }
})

export default Exercicio2