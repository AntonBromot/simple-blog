import React  from 'react'
import Header from '../../components/Header'

const ASSETS = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum congue neque, eu molestie leo consequat nec. Mauris hendrerit eleifend nibh, vel varius dui iaculis id. Curabitur dignissim, nibh quis dapibus ullamcorper, sem lorem consectetur nunc, sed iaculis eros augue commodo ligula. Quisque sed ipsum sapien. Aliquam faucibus condimentum quam id ornare. Phasellus efficitur tristique tempor. Mauris ut ipsum vel quam tristique iaculis. Integer consequat vitae dui in tincidunt. Suspendisse interdum imperdiet consectetur. Aenean eu rutrum lectus. Fusce mi ex, lacinia quis mollis ac, maximus quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dapibus ante id nisi aliquet, at tempus neque rutrum."
}

const AboutUs = () => [
    <Header key="header" section='about us' />,
    <div key="text" className='blogsWrapper'>{ ASSETS.text }</div>
]

export default AboutUs
