import iconSelect from '../../assets/scripts/iconSelect'
import { Container } from './style'

const CardNextDay = ({day, date, temp_max, temp_min}) => {
    return (
        <Container>
            <h2>{day}</h2>
            <p>{date}</p>
            <div>
                <div>
                    <img src={iconSelect('Máxima')} alt="" />
                    <p>Max</p>
                    <p>{temp_max} °</p>
                </div>
                <div>
                <img src={iconSelect('Mínima')} alt="" />
                    <p>Min</p>
                    <p>{temp_min} °</p>
                </div>
            </div>
        </Container>
    )
}

export default CardNextDay