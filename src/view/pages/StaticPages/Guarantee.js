import React  from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: "Nulla vestibulum mollis dui, ac ultricies sem hendrerit sed. Donec in augue maximus, accumsan elit et, volutpat magna. Nulla semper justo ut libero sodales ultricies. Aenean condimentum metus id ligula consectetur, vitae mollis mauris scelerisque. Praesent justo magna, interdum et sodales ut, pretium nec est. Sed dapibus egestas varius. Curabitur ipsum diam, luctus nec lectus vel, consectetur convallis augue."
}

const Guarantee = () => [
    <Header key="header" section='guarantee' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default Guarantee
