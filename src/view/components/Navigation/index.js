import React, { useState, useMemo, useCallback } from 'react'
import {Link, NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import { NAV_LINKS } from '../../../constants'
import IMAGES from '../../../resources/images'


const navList = NAV_LINKS.map(({ link: to, value }, key) => <NavLink className='navItem' { ...{ key, to } } >{ value }</NavLink> )

const Navigation = () => {
    const [ isOpened, setIsOpened ] = useState( false ),
           memoNavList = useMemo( () => navList, [ isOpened ] ),
           showHide = useCallback( () => setIsOpened(!isOpened), [ isOpened ] )

    return (
        <div>
            <div className="navigation">
                <Link className='navLogo' to='/1'>
                    <img src={ IMAGES.logo } />
                </Link>
                <div className='navList'>
                    { memoNavList }
                </div>
                <div className='expand'>
                    <FontAwesome name='align-justify' onClick={ showHide } />
                    <div className="dropDownWrapper" onClick={ showHide }>
                        { isOpened && memoNavList }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
