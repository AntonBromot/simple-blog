import React  from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: " Vivamus neque metus, scelerisque vel auctor nec, ullamcorper sed tortor. Integer id euismod arcu, consectetur ultrices tellus. Proin sed orci facilisis sapien dapibus aliquam. Curabitur nec tempor sapien, eu laoreet ipsum. Mauris et elit turpis. Integer finibus condimentum bibendum. Nullam euismod tincidunt nunc, quis lacinia leo volutpat non."
}

const Contact = () => [
    <Header key="header" section='contact us' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default Contact
