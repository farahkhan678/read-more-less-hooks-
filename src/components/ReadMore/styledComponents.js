// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
`

export const ReadMoreContainer = styled.div`
  width: 80%;
  max-width: 1010px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ReactHooksHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`

export const ReactHooksDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const ReactHooksImage = styled.img`
  height: 500px;
  width: 900px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const ReadMoreParagraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`

export const ReadMoreButton = styled.button`
  background: #1f81ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    height: 25px;
    width: 90px;
    font-size: 10px;
    align-self: flex-start;
    margin-top: 20px;
  }
`
