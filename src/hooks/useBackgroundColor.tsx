
import ImageColors from 'react-native-image-colors';
import { Characters } from '../interfaces/characterInterface';
import { colors as colorsTheme } from '../themes/globalTheme';


const useBackgroundColor = (character:Characters,isMounted:boolean,setBgColor:any) => {
    ImageColors.getColors(character.image, { fallback: colorsTheme.secondary })
                .then(colors => {
                    if (!isMounted) return //evita que calcule el color si no esta montado
                    colors.platform === 'android'
                        ? setBgColor(colors.dominant || colorsTheme.secondary)
                        : setBgColor(colorsTheme.secondary)
                })
}

export default useBackgroundColor