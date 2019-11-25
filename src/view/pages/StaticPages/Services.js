import React from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: "Morbi dignissim facilisis aliquet. Ut mollis odio enim, id gravida ipsum volutpat eu. In tristique nulla massa, vel vestibulum mi vehicula in."
}

const Services = () => [
    <Header key="header" section='services' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default Services
