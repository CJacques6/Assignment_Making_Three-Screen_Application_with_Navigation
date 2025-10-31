import { useRouter } from "expo-router";
import { StyleSheet, View } from 'react-native';

const nav_bar = () => {

    const router = useRouter();

  return (
    <View style>
      
    </View>
  )
}

export default nav_bar

const styles = StyleSheet.create({
    navbar:{
        position: 'relative',
        position: 'absolute',
        bottom: 5,
        flexDirection: "row",
    }
})