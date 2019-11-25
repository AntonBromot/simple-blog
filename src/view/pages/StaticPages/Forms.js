import React from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: "Quisque euismod placerat faucibus. Donec at urna eu lacus venenatis luctus. Nam consectetur neque mattis, laoreet tellus nec, malesuada eros. Aliquam vel mi ipsum. Curabitur gravida justo convallis nisl viverra, et imperdiet dolor dictum. Proin eros eros, laoreet vel pretium eget, scelerisque id diam. Nam accumsan nunc a lorem facilisis, tincidunt tincidunt nibh sodales. Nunc scelerisque diam non tincidunt faucibus. Aenean vitae eros vulputate turpis faucibus interdum vel id elit. Fusce commodo diam ut turpis fermentum, at vehicula enim fermentum"
}

const Forms = () => [
    <Header key="header" section='forms' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default Forms
