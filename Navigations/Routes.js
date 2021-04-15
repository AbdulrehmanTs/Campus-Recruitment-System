import React, { useContext, useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'

const Routes = ()=>{

    const {user, setUser} = useContext(AuthContext);
    const [initilizing, setInitializing] = useState(true)

    const onAuthStateChanged = (user)=>{
        setUser(user)
        if (initilizing) setInitializing(false)
    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [])

    if (initilizing) return null;


    return (
        <NavigationContainer>
             {user ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;