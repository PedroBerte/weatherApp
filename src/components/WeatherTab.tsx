import { Flex, Text, Image } from '@chakra-ui/react'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { CurrentDefaultResponseData } from '../types/CurrentResponse'
import { ForecastDefaultResponseData } from '../types/ForecastResponse';

type pageProps = {
    current: CurrentDefaultResponseData;
    forecast: ForecastDefaultResponseData;
}

export default function WeatherTab(props: pageProps) {
    const [currentTime, setCurrentTime] = useState(new Date());

    const currentDate = new Date();

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);

  return (
    <Flex bg="#2D2A54" w="20%" h="full" direction="column" align="center" p="1rem">
        <Flex direction="column">
            <Text color="white" fontWeight="semibold" fontSize="5xl">{props.current?.location?.region}</Text>
            <Text color="white" fontSize="1xl">{props.current?.location?.name}, {currentTime.toLocaleTimeString()}</Text>
        </Flex>
        <Flex mt="3rem">
            <Image  objectFit='contain' src={`https:${props.current?.current?.condition.icon.replace("64x64", "128x128")}`} alt='Dan Abramov' />
            <Flex direction="column">
                <Text color="white" fontSize="5xl">
                    {props.current?.current?.temp_c}°
                </Text>
                <Text color="white" fontSize="2xl">
                    {props.forecast?.forecast?.forecastday?.find((day) => day.date === moment(currentDate).format("YYYY-MM-DD"))?.day?.mintemp_c}° / {props.forecast?.forecast?.forecastday?.find((day) => day.date === moment(currentDate).format("YYYY-MM-DD"))?.day?.maxtemp_c}°
                </Text>
                <Text color="white" fontSize="1xl">
                    {props.current?.current?.condition.text}
                </Text>
            </Flex>
        </Flex>
    </Flex>
  )
}
