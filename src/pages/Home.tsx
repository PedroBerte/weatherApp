import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import WeatherTab from '../components/WeatherTab'
import { CurrentApi, ForecastApi } from '../services/api'
import { CurrentDefaultResponseData } from '../types/CurrentResponse'
import { ForecastDefaultResponseData } from '../types/ForecastResponse'

export default function Home() {

  const [currentData, setCurrentData] = useState({} as CurrentDefaultResponseData)
  const [forecastData, setForecastData] = useState({} as ForecastDefaultResponseData)

  useEffect(() => {
    async function fetchData(){
      await CurrentApi.get('', {
        params: {
          q: 'itu',
        },
      }).then((response) => {
        setCurrentData(response.data);
        console.log(response.data)
      }).catch((error) => {
        console.log(error);
      })

      await ForecastApi.get('', {
        params: {
          q: 'itu',
        },
      }).then((response) => {
        setForecastData(response.data);
        console.log(response.data)
      }).catch((error) => {
        console.log(error);
      })
    }
    fetchData();
  }, [])

  return (
    <Flex direction="row" h="100vh">
      <WeatherTab forecast={forecastData} current={currentData} />
      <Main />
    </Flex>
  )
}
