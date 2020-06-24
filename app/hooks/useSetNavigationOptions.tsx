import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Session } from '../screens/Session';
import { View } from 'react-native';

export const useSetNavigationOptions = (title:string, showHeader:boolean) => {
  const navigation = useNavigation()
  const options: StackNavigationOptions = {
    headerTintColor: "white",
    headerTitle: `${title}`,
    headerStyle: {
      backgroundColor: '#3f51b5'
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerRight: () => (
      <View>
        { showHeader ? 
          <Session navigation={navigation}/>
          :
          <></>
       }
      </View>      
    )
  }
  navigation.setOptions(options)
}