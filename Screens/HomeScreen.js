import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormButton from '../Components/FormButton'
import { AuthContext } from '../Navigations/AuthProvider'


const HomeScreen = ({navigation}) => {
    const { logout } = useContext(AuthContext)
    return (
        <View style={styles.HomeContainer}>
            <Text>Home Screen </Text>
            <FormButton 
                buttonTitle='Log Out'
                onPress={()=>logout()}
            />

            <FormButton 
                buttonTitle='SignUp'
                onpress={()=>navigation.navigate('SignupScreen')}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    HomeContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
