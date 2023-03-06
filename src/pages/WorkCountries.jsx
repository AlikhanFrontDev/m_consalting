import React from 'react'
import styled from 'styled-components'
export default function WorkCountries() {
  return (
    <Container>
        <div className="logo">
            <h3>Demo Logo</h3>
        </div>
        <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    </Container>
  )
}

const Container = styled.div`
     @media screen and (max-width: 912px) {
        .box{
            min-width: 180px;
            min-height: 180px;
            background-color: red;
            margin: 2px;
            border-radius: 10px;
        } 
        .boxes{
            display: flex;
            flex-wrap: wrap;
            width: 95%;
            margin: 30px auto;
        }
        .logo{
            margin: 20px;
        }
     }
`
