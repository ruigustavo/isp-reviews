import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import InternetProvider from './InternetProvider'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`


const InternetProviders = () => {
    const [internetProviders, setInternetProviders] = useState([])

    useEffect(() => {
        //GET all of our internet providers frmo api
        axios.get('api/v1/internet_providers.json')
        .then (resp =>{
            setInternetProviders(resp.data.data)
        } )
        .catch (resp => console.log(resp))

        //update internet providers in our state
    }, [internetProviders.length])

    const grid = internetProviders.map( item => {
        return (<InternetProvider 
            key={item.attributes.name} 
            attributes = {item.attributes}/>
        )
    })

    return (
        <Home>
            <Header>  
                <h1> Open Internet Providers</h1>
                <Subheader> Honest, unbiased internet providers reviews. </Subheader>
            </Header>
            <Grid>  
                {grid}
            </Grid>
        </Home>
        
    )
}

export default InternetProviders