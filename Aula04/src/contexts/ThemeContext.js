import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {

    }
})

export const ThemeContext = () => {
    return (
        <View>
            <Text>ThemeContext</Text>
        </View>
    )
}