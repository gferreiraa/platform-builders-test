import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { RotateSpinner } from 'react-spinners-kit'

const CurrentLocation = () => {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)
  const [loading, setLoading] = useState(false)

  let getWeather = async (lat, long) => {
    setLoading(true)
    let res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: lat,
          lon: long,
          // eslint-disable-next-line no-undef
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          units: 'metric'
        }
      }
    )
    setLoading(false)
    setWeather(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  if (location == false) {
    return (
      <S.WrapperEnable>
        <p>You need to enable browser location!</p>
      </S.WrapperEnable>
    )
  } else if (weather == false) {
    return (
      <S.WrapperCurrentLocation>
        {' '}
        <RotateSpinner
          size={90}
          color="#ffc900"
          loading={loading}
          className="Loading"
        />
      </S.WrapperCurrentLocation>
    )
  } else {
    return (
      <S.WrapperCurrentLocation>
        <p>You current city is {weather.name} </p>
        <S.MainInfo>
          {Math.round(weather.main.temp)}
          <span>&deg;C</span>
          <S.SecondaryInfo>{weather.weather[0].description}</S.SecondaryInfo>
        </S.MainInfo>
        <S.ExtraInfo>
          <p>
            Min: <span>{weather.main.temp_min}&deg;C</span>
          </p>
          <p>
            Max: <span>{weather.main.temp_max}&deg;C</span>
          </p>
        </S.ExtraInfo>
      </S.WrapperCurrentLocation>
    )
  }
}

export default CurrentLocation
