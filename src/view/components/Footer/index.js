import React from "react";
import { Link } from 'react-router-dom'

const ASSETS = {
	LANG: {
		blog: "@Windsor Publishing Inc. 2019",
		contact: "Contact Us"
	}
}

const Footer = () => (
	<footer className="Footer">
		<div className="footerWrapper">
			<span >{ ASSETS.LANG.blog }</span>
			<Link to='/contact'>{ ASSETS.LANG.contact }</Link>
		</div>
	</footer>
)

export default Footer
