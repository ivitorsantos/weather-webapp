import { Container } from "./style";

import iconSelect from "../../assets/scripts/iconSelect";

const ExtraInformation = ({title, data}) => {
    return (
        <Container>
            <img src={iconSelect(title)} alt={'Foto que representa ' + title} />
            <h2>{title}</h2>
            <p>{data}</p>
        </Container>
    )

}

export default ExtraInformation