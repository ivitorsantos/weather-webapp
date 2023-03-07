import { Container } from './style'

import ImgCurrentTemperature from '../../imgs/cloudsun.png'

const CurrentTemperature = ({text ,data, icon}) => {
    return (
        <Container>
            <img src={ImgCurrentTemperature} alt="" />
            <p>{text}</p>
            <h1>{data}°</h1>

        </Container>
    )
}

export default CurrentTemperature