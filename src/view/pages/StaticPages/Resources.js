import React from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: "Praesent id nisl ac sapien tincidunt facilisis sit amet eu justo. Donec lacinia magna venenatis leo varius faucibus. Nunc eu turpis in risus tristique laoreet. Maecenas vehicula ipsum non mauris tincidunt ultricies. Donec et ullamcorper sapien, ac accumsan diam. Nam quis molestie leo. Curabitur pellentesque erat dictum augue fermentum aliquam. Donec sed purus eu elit molestie elementum. Maecenas ac mauris eget libero feugiat tristique. Maecenas ultricies dolor diam, vel sodales metus porta sed. Aliquam quis blandit magna. Fusce vel viverra lectus, nec sagittis justo"
}

const Resources = () => [
    <Header key="header" section='resourses' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default Resources
