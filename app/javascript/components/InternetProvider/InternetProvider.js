import axios from 'axios'
import React,{useState, useEffect, Fragment} from 'react'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    float: left; 
    height: 100vh;
    overflow-x: scroll;
    overflow-y: scroll; 
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    
    &:last-child {
        background: black;
        border-top: 1px solid rgba(255,255,255,0.5);
    }
`
const Main = styled.div`
    padding-left: 50px;
`

const InternetProvider = (props) => {
    const [internetProvider, setInternetProvider] = useState({})
    const [review, setReview] = useState({ title: '', description: '', score: 0 })
    const [loaded, setLoaded] = useState(false)

    

    useEffect (() => {
        const slug = props.match.params.slug
        const url = `/api/v1/internet_providers/${slug}`

        axios.get(url)
        .then( resp => {
            setInternetProvider(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp) )

        
        //api/v1/internet_provider/orange
        //internet-providers/orange
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setReview({...review,[e.target.name]: e.target.value})
        console.log('review', review)
        //console.log('name:', e.target.name, 'value:', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("hello submit button")
        //const csrfToken = document.querySelector('[name=csrf-token]').content
        //axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const internet_provider_id = parseInt(internetProvider.data.id)
        axios.post('/api/v1/reviews', {review, internet_provider_id })
        .then(resp =>{
            const included = [...internetProvider.included, resp.data.data]
            //console.log(included)
            setInternetProvider({...internetProvider, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => {
            console.log('Error', resp)
        })
    }

    const setRating = (score, e) => {
        e.preventDefault()
        
        setReview({...review, score})
    }

    let reviews
    if (loaded && internetProvider.included) {
        reviews = internetProvider.included.map( (item, index) => {
            return (
                <Review
                 key={index}
                 attributes={item.attributes}
                />
            )
        })
    }
    

    return (
    <Wrapper> 
        {
            loaded && 
            <Fragment>
                <Column>
                    <Main>
                        {
                            
                            <Header 
                                attributes={internetProvider.data.attributes}
                                reviews={internetProvider.included}
                            />
                        }
                        {reviews}
                    </Main>
                </Column>
                <Column>
                    <ReviewForm 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit} 
                        attributes={internetProvider.data.attributes} 
                        review={review}
                        setRating={setRating}
                        />
                </Column>
            </Fragment>
        }
    </Wrapper>
    )
}

export default InternetProvider