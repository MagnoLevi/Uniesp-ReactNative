import { View } from 'react-native'
import React from 'react'
import Exercicio from './src/components/Exercicio1'
import Exercicio2 from './src/components/Exercicio2'
import Exercicio3 from './src/components/Exercicio3'

const App = () => {
  return (
    <View>
      {/* <Exercicio nome="Magno Levi dos Santos" /> */}
      {/* <Exercicio2 /> */}
      <Exercicio3 />
    </View>
  )
}

export default App