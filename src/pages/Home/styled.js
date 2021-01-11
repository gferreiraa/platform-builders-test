import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
export const Header = styled.header`
  max-width: 544px;
`

export const Title = styled.h1`
  max-width: 544px;
  font-size: 26px;
  margin: 20px 0;
  span {
    font-weight: bold;
  }
`
export const Form = styled.div`
  max-width: 544px;
  margin: 20px 0;
  display: flex;

  input {
    flex: 1;
    height: 51px;
    padding: 0 24px;
    border: solid 2px #000;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 200px;
    height: 51px;
    background-color: #000;
    color: #fff;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    box-shadow: rgba(118, 130, 183, 0.18) 0px 10px 10px;
    transition: color 0.5s;
    transition: background-color 0.5s;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #000;
      background-color: #ffc900;
    }
  }
`

export const Card = styled.div`
  max-width: 544px;
  height: 544px;
  background-color: #fff;
  box-shadow: rgba(118, 130, 183, 0.18) 0px 20px 20px;
  margin: 40px 0;
  flex: 1 0 auto;
  border-radius: 5px;
  background: #ece9e6;
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); 
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); 
  }
`

export const Loading = styled.div``

export const TitleCard = styled.h2`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  hr {
    border: 2px dotted;
    width: 20%;
  }
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const MainInfo = styled.p`
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

export const WrapperTime = styled.div`
  max-width: 544px;
`

export const Day = styled.p`
  font-size: 16px;
  text-align: center;
`

export const Footer = styled.footer`
  max-width: 544px;
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  span {
    color: #ffc900;
  }
  a {
    color: #000;
    font-weight: bold;
  }
`
