import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'

export const useSetNavigationOptions = (title:string) => {
  const navigation = useNavigation()
  const options: StackNavigationOptions = {
    headerTitle: `${title}`
  }
  navigation.setOptions(options)
}