import React  from "react";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ section, link, linkName }) => (
	<header className="Header">
		<div className="headerWrapper">
			<Link to='/1' className="titleHead">{section}</Link>
			{ link &&  <Link to={link}>{linkName}</Link> }
		</div>
	</header>
)

Header.propTypes = {
	section: PropTypes.string,
	link: PropTypes.string,
	linkName: PropTypes.string
}

export default Header
