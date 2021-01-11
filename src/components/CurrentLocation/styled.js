import styled from 'styled-components'

export const WrapperEnable = styled.div`
  max-width: 544px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 26px;
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
  }
`
export const WrapperCurrentLocation = styled.div`
  max-width: 544px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;
  }
  span {
    font-size: 26px;
    font-weight: bold;
    margin-left: 5px;
  }
`
export const MainInfo = styled.h3`
  font-size: 150px;
  font-weight: bold;
  text-align: center;
  span {
    font-size: 50px;
    margin-top: 25px;
    position: absolute;
  }
`

export const SecondaryInfo = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

export const ExtraInfo = styled.div`
  p {
    text-align: center;
    margin: 10px 0;
    font-weight: bold;
    span {
      font-weight: 100;
    }
  }
`
