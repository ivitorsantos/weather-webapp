import { useState, useEffect } from 'react'

import axios from 'axios'

import getMonthName from './assets/scripts/getMonthName'
import getDayOfWeek from './assets/scripts/getDayOfWeek'

import Nav from './components/nav'
import CurrentTemperature from './components/currentTemperature'
import ExtraInformation from './components/extraInformation'
import CardNextDay from './components/CardNextDay'

import { Container, ExtraContainer, NextDayContainer } from './style'

const App = () => {
  const currentData = new Date()
  const [tempDetails, setTempDetails] = useState({})

  useEffect(() => {

    async function Resultado() {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-21.26&longitude=-48.56&hourly=temperature_2m,relativehumidity_2m,winddirection_180m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo')
      setTempDetails(response.data)
    }

    Resultado()

  }, [])

  if (!tempDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Nav city={'Taquaritinga-SP'} date={`${currentData.getDate()} de ${getMonthName(currentData.getMonth() + 1)} de ${currentData.getFullYear()}`} />
      <CurrentTemperature text={'Sol com bastante nuvens'} data={tempDetails.current_weather?.temperature.toFixed(0)} icon={''}/>
      <ExtraContainer>
        <ExtraInformation title={'Máxima'} data={`${tempDetails.daily?.temperature_2m_max[0].toFixed(0)} °`} />
        <ExtraInformation title={'Mínima'} data={`${tempDetails.daily?.temperature_2m_min[0].toFixed(0)} °`} />
        <ExtraInformation title={'Vento'} data={`${tempDetails.current_weather?.windspeed}km/h`} />
      </ExtraContainer>
      <NextDayContainer>
        <CardNextDay day={getDayOfWeek(currentData.getDay()+1)} date={`${currentData.getDate()+1} de ${getMonthName(currentData.getMonth() + 1)} de ${currentData.getFullYear()}`} temp_max={tempDetails.daily?.temperature_2m_max[1].toFixed(0)} temp_min={tempDetails.daily?.temperature_2m_min[1].toFixed(0)}/>
        <CardNextDay day={getDayOfWeek(currentData.getDay()+2)} date={`${currentData.getDate()+2} de ${getMonthName(currentData.getMonth() + 1)} de ${currentData.getFullYear()}`} temp_max={tempDetails.daily?.temperature_2m_max[2].toFixed(0)} temp_min={tempDetails.daily?.temperature_2m_min[2].toFixed(0)}/>
        <CardNextDay day={getDayOfWeek(currentData.getDay()+3)} date={`${currentData.getDate()+3} de ${getMonthName(currentData.getMonth() + 1)} de ${currentData.getFullYear()}`} temp_max={tempDetails.daily?.temperature_2m_max[3].toFixed(0)} temp_min={tempDetails.daily?.temperature_2m_min[3].toFixed(0)}/>
      </NextDayContainer>
    </Container>
  )
}

export default App
