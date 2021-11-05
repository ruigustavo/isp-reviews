import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'



const Card = styled.div`
border: 1px solid #efefef;
background: #fff;
text-align: center;
`
const InternetProviderLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    img{
        heigh: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const InternetProviderName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a{
        color: #fff;
        background: #000;
        border-radius:4px;
        padding: 10px 50px;
        width: 100%;
        text-decoration: none;
    }
`

const InternetProvider = (props) => {
    return (
    <Card>
        <InternetProviderName> 
            <img src={props.attributes.image_url} alt={props.attributes.name} />
        </InternetProviderName>
        <div className="internet-provider-name"> {props.attributes.name}</div>
        <Rating score={props.attributes.avg_score} />
        <LinkWrapper> 
            <Link to={`/internet-providers/${props.attributes.slug}`}> View Internet Provider </Link>
        </LinkWrapper>
    </Card>)
}

export default InternetProvider