import CLOUDMAX from '../../imgs/cloudmax.png'
import CLOUDMIN from '../../imgs/cloudmin.png'
import WIND from '../../imgs/wind.png'

export default function iconSelect(title) {
    switch (title) {
        case 'Vento':
            return WIND
        case 'Máxima':
            return CLOUDMAX
        case 'Mínima':
            return CLOUDMIN

        default:
            break;
    }
} 
