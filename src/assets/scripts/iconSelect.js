export default function iconSelect(title) {
    switch (title) {
        case 'Indice UV':
            return './src/imgs/uv.png'
        case 'Humidade':
            return './src/imgs/humidade.png'
        case 'Vento':
            return './src/imgs/wind.png'
        case 'Máxima':
            return './src/imgs/cloudmax.png'
        case 'Mínima':
            return './src/imgs/cloudmin.png'


        default:
            break;
    }
} 