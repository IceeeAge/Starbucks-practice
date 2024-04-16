import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Sliders from './Sliders'
import Category from './Category'

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header/>
      <Sliders/>
      <Category/>
    </ScrollView>
  )
}