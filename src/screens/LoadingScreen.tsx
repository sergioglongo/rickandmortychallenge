import React from 'react'
import { ActivityIndicator, View ,Image} from 'react-native'
import { styles } from '../themes/globalTheme'

export const LoadingScreen = () => {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                        <Image
                source={require('../assets/rym_splash_screen.png')}
                style={{...styles.imagebackgound,opacity:1}}
            />
            <ActivityIndicator 
                size={ 50 }
                color="black"
            />
        </View>
    )
}
