import {HiMenuAlt2} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'

import Swith from 'react-switch'
import {Container} from './style'


const Nav = ({city, date}) => {

    return (
        <Container>
            <div>
                <HiMenuAlt2/>
            </div>
            <div id='location'>
                <MdLocationOn/>
                <div>
                    <span>{city}</span>
                    <span id='date'>{date}</span>
                </div>
            </div>
            <div>
                <Swith onChange={() => console.log('ts')} offColor={'#333'} onColor={'#f3f3f3'} checkedIcon={false} uncheckedIcon={false} height={24} size={10} checked={false}/>
            </div>   
        </Container>
    )

}

export default Nav