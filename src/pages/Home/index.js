import React, { useState } from 'react'
import * as S from './styled'
import Logo from '../../assets/logo-bc.svg'
import { fetchWeather } from '../../services/api'
import { RotateSpinner } from 'react-spinners-kit'

import CurrentLocation from '../../components/CurrentLocation'

const Home = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  const search = async (e) => {
    try {
      if (e.key === 'Enter') {
        setLoading(true)
        const data = await fetchWeather(query)
        setLoading(false)
        setWeather(data)
        setQuery('')
      }
    } catch (err) {
      setWeather(err)
      setQuery('')
      setLoading(err)
    }
  }

  const getWeather = async (query) => {
    if (query !== '') {
      setLoading(true)
      const data = await fetchWeather(query)
      setLoading(false)
      setWeather(data)
      setQuery('')
    } else {
      alert('Fill in the field to get started')
    }
  }

  const now = new Date()

  const completeDate = () => {
    const date =
      now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
    const time = now.getHours() + ':' + now.getMinutes()
    const dateTime = date + ' | ' + time
    return dateTime
  }

  return (
    <React.Fragment>
      <S.Wrapper>
        <S.Header>
          <img src={Logo} />
        </S.Header>
        <S.Title>
          Platform Builders <span>Open Weather Map</span>
        </S.Title>
        <S.Form>
          <input
            required
            type="text"
            placeholder="Enter your city name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          <button onClick={() => getWeather(query)}>Search</button>
        </S.Form>
        <S.Card>
          {weather.main && weather.main ? (
            <S.Container>
              {!loading ? (
                <>
                  <S.TitleCard>
                    {weather.name}, <span>{weather.sys.country}</span>
                    <hr />
                  </S.TitleCard>
                  <S.MainInfo>
                    {Math.round(weather.main.temp)}
                    <span>&deg;C</span>
                    <S.SecondaryInfo>
                      {weather.weather[0].description}
                    </S.SecondaryInfo>
                  </S.MainInfo>
                  <S.ExtraInfo>
                    <p>
                      Min: <span>{weather.main.temp_min}&deg;C</span>
                    </p>
                    <p>
                      Max: <span>{weather.main.temp_max}&deg;C</span>
                    </p>
                  </S.ExtraInfo>
                  <S.WrapperTime>
                    <S.Day>{completeDate()}</S.Day>
                  </S.WrapperTime>
                </>
              ) : (
                <S.Loading>
                  <RotateSpinner
                    size={90}
                    color="#ffc900"
                    loading={loading}
                    className="Loading"
                  />
                </S.Loading>
              )}
            </S.Container>
          ) : (
            <CurrentLocation />
          )}
        </S.Card>
        <S.Footer>
          {' '}
          © {now.getFullYear()} - Built with <span>❤</span> React, by{' '}
          <a
            href="https://gferreiraa.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            gferreiraa.github.io
          </a>
        </S.Footer>
      </S.Wrapper>
    </React.Fragment>
  )
}

export default Home
