import { TextInput, View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = () => {
    const [texto, setTexto] = useState('')


    return (
        <View style={styles.container}>
            <Text>Aqui está o que você digitou: {texto}</Text>
            <TextInput style={styles.input} value={texto} onChangeText={setTexto} placeholder='Digite algo aqui'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: '10px'
    },
    input: {
        borderColor: 'black',
        // borderWidth: '2px',
        padding: '2px',
    }
})

export default Exercicio3