import React from 'react'
import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BarTop = ({navigation, route}) => {

    const handlePress = () => {
        navigation.navigate("NewClient")
    }

    return ( 
        <Button 
            icon="camera"
            textColor='#FFF'
            onPress={() => handlePress()}
        >
            Nuevo cliente
        </Button>
     );
}

export default BarTop;